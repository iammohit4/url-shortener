"use client"
import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import Loading from "@/components/loading";
import Link from "next/link";

const About = () => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <h1 className="text-accent text-2xl font-bold">About</h1>
            <p>This is a URL Shortener made using Typescript, Next.js 14, DaisyUI, Tailwind CSS and an open source url shortener api.</p>
            <Link href="https://github.com/iammohit4/url-shortener" className="btn btn-outline m-1" target="_blank">Source Code</Link>
            <Link href="https://linkedin.com/in/mohit-sundrani-11470a309" className="btn btn-primary m-1" target="_blank"><FaLinkedin /></Link>
        </div>
    )
}

export default About