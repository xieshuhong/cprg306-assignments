import Link from "next/link";
export default function StudentInfo() {
    return(
        <div className="z-10 max-w-5xl w-full flex-col items-center justify-between font-mono text-sm lg:flex">
                    <p>Name: Zoe Xie</p>
                    <p>Course section: CPRG 306 C</p>
                    <Link href="https://github.com/xieshuhong/cprg306-assignments">https://github.com/xieshuhong/cprg306-assignments</Link>
        </div>
    )
}