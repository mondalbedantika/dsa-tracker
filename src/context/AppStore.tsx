import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Problem, ProblemSet, Activity } from '../types';

export type Profile = { name: string; handle: string; goal: string; bio: string; avatar: string };
type Store = { problems: Problem[]; problemSets: ProblemSet[]; activities: Activity[]; profile: Profile; markSolved: (id:string)=>void; updateNotes:(id:string, notes:string)=>void; advanceRevision:(id:string)=>void; updateProfile:(profile:Profile)=>void; updateGoal:(goal:string)=>void };
const seed: Problem[] = [
  {id:'1',title:'Two Sum',topic:'Arrays',difficulty:'Easy',problemSet:'Blind 75',link:'#',solved:true,revisionStage:'Revision 1',dateSolved:'2026-08-13',notes:'## Pattern\nHash map complement lookup.\n\n## Complexity\nO(n) time · O(n) space'},
  {id:'2',title:'Valid Parentheses',topic:'Stacks',difficulty:'Easy',problemSet:'Blind 75',link:'#',solved:true,revisionStage:'Solved',dateSolved:'2026-08-14'},
  {id:'3',title:'Longest Substring Without Repeating Characters',topic:'Sliding Window',difficulty:'Medium',problemSet:'NeetCode 150',link:'#',solved:false,revisionStage:'Unsolved'},
  {id:'4',title:'Product of Array Except Self',topic:'Arrays',difficulty:'Medium',problemSet:'Blind 75',link:'#',solved:false,revisionStage:'Unsolved'},
  {id:'5',title:'Binary Tree Level Order Traversal',topic:'Trees',difficulty:'Medium',problemSet:'NeetCode 150',link:'#',solved:false,revisionStage:'Unsolved'},
];
const sets=[{id:'1',name:'Blind 75',totalProblems:75,lastActivity:'Today'},{id:'2',name:'NeetCode 150',totalProblems:150,lastActivity:'Yesterday'},{id:'3',name:'LeetCode 75',totalProblems:75,lastActivity:'Aug 10'}];
const defaultProfile={name:'Bedantika Mondal',handle:'@bedantika',goal:'Crack product-based interviews',bio:'Building depth, one problem at a time.',avatar:'BM'};
const C=createContext<Store|undefined>(undefined); const key='algo-grove-store';
export const AppProvider=({children}:{children:ReactNode})=>{const [data]=useState(()=>{try{return JSON.parse(localStorage.getItem(key)||'') }catch{return null}}); const [problems,setProblems]=useState<Problem[]>(data?.problems||seed); const [profile,setProfile]=useState<Profile>(data?.profile||defaultProfile);
useEffect(()=>localStorage.setItem(key,JSON.stringify({problems,profile})),[problems,profile]);
const markSolved=(id:string)=>setProblems(x=>x.map(p=>p.id===id?{...p,solved:true,revisionStage:'Solved',dateSolved:new Date().toISOString()}:p));
const updateNotes=(id:string,notes:string)=>setProblems(x=>x.map(p=>p.id===id?{...p,notes}:p));
const advanceRevision=(id:string)=>setProblems(x=>x.map(p=>p.id===id?{...p,revisionStage:p.revisionStage==='Solved'?'Revision 1':p.revisionStage==='Revision 1'?'Revision 2':p.revisionStage==='Revision 2'?'Mastered':p.revisionStage}:p));
return <C.Provider value={{problems,problemSets:sets,activities:[],profile,markSolved,updateNotes,advanceRevision,updateProfile:setProfile,updateGoal:(goal)=>setProfile(p=>({...p,goal}))}}>{children}</C.Provider>};
export const useAppStore=()=>{const x=useContext(C);if(!x)throw Error('AppProvider missing');return x};
