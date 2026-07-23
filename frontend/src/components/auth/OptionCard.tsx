type Props={

label:string;

selected:boolean;

onClick:()=>void;

}

export default function OptionCard({

label,

selected,

onClick

}:Props){

return(

<button

onClick={onClick}

className={`

w-full

rounded-xl

border

p-5

text-left

transition

${
selected

?

"border-emerald-500 bg-emerald-500/10"

:

"border-slate-700"

}

`}

>

{label}

</button>

)

}