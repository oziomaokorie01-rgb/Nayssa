type Props={
    step:number;
}

export default function ProgressBar({step}:Props){

    const width=(step/5)*100;

    return(

        <div className="w-full">

            <div className="h-3 rounded-full bg-slate-800">

                <div
                className="h-3 rounded-full bg-emerald-500 transition-all duration-500"
                style={{width:`${width}%`}}
                />

            </div>

        </div>

    )

}