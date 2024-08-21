"use client"
import React, { useState, useEffect } from "react";
import create from "@/actions/create";
import Link from "next/link";
import Loading from "@/components/loading";

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [url, setUrl] = useState<string>("");
    const [short, setShort] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await create(url);
            if (typeof (res) == "string") {
                setShort(res);
            }
        }
        catch (e) {
            console.error(e);
        }
        setLoading(false);
    }

    const copyLink = () => {
        navigator.clipboard.writeText(short);
        alert("Link copied!")
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
                        <h2 className="card-title">Create Link</h2>
                        <p>Enter a link below to create a short link.</p>
                        <input onChange={e => setUrl(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" required />
                        <div className="card-actions justify-end">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
                {short ? <>
                    <div className="card bg-transparent w-full my-2 border border-1 border-accent">
                        <div className="card-body">
                            <h2 className="card-title">Short Link</h2>
                            <Link href={short} className="text-accent">{short}</Link>
                            <div className="card-actions justify-end">
                                <button onClick={() => copyLink()} type="button" className="btn btn-outline">Copy Link</button>
                            </div>
                        </div>
                    </div>
                </> : <></>}
            </div>
        </div>
    )
}

export default Home