import { create } from "zustand";

type OnboardingState = {
    step: number;

    exam: string;
    learningStyle: string;
    accent: string;
    tutor: string;
    goal: string;

    next: () => void;
    back: () => void;

    setExam: (v:string)=>void;
    setLearningStyle:(v:string)=>void;
    setAccent:(v:string)=>void;
    setTutor:(v:string)=>void;
    setGoal:(v:string)=>void;
};

export const useOnboardingStore = create<OnboardingState>((set)=>({

    step:1,

    exam:"",
    learningStyle:"",
    accent:"",
    tutor:"",
    goal:"",

    next:()=>set(s=>({step:s.step+1})),

    back:()=>set(s=>({step:s.step-1})),

    setExam:(v)=>set({exam:v}),
    setLearningStyle:(v)=>set({learningStyle:v}),
    setAccent:(v)=>set({accent:v}),
    setTutor:(v)=>set({tutor:v}),
    setGoal:(v)=>set({goal:v})

}));