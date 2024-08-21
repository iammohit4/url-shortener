"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import track from "@/actions/track";
import { Data } from "@/lib/types";
import Loading from "@/components/loading";

const Track = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [code, setCode] = useState<string>("");
    const [data, setData] = useState<Data>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await track(code);
            if (typeof (res) == "object") {
                setData(res);
            }
        }
        catch (e) {
            alert("Something went wrong");
            console.error(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="flex w-full justify-center">
            <div className="block">
                <div className="card bg-base-300 w-full">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h2 className="card-title">Track Link</h2>
                        <p>Enter the code below to track the link.</p>
                        <input onChange={e => setCode(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" required />
                        <div className="card-actions justify-end">
                            <button type="submit" className="btn btn-primary">Track</button>
                        </div>
                    </form>
                </div>
                {data ? <>
                    <div className="card bg-transparent w-full my-2 border border-1 border-accent">
                        <div className="card-body">
                            <p>Code: {data?._id}</p>
                            <p>URL: <Link href={data?.url} className="text-accent">{data?.url}</Link></p>
                            <p>Total Clicks: {data["total-clicks"]}</p>
                            <p>Total Unique Clicks: {data?.total_unique_clicks}</p>
                            <p>Creation Date: {data["creation-date"]}</p>
                            <p>Creation Time: {data["creation-time"]}</p>
                            <p>Average Daily Clicks: {data?.average_daily_clicks}</p>
                            <p>Average Weekly Clicks: {data?.average_weekly_clicks}</p>
                            <p>Average Monthly Clicks: {data?.average_monthly_clicks}</p>
                        </div>
                    </div>
                </> : <></>}
            </div>
        </div>
    )
}

export default Track