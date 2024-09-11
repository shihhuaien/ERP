import Image from "next/image"
import TeacherForm from "@/components/forms/TeacherForm";
import Link from "next/link";
import PasskeyModal from "@/components/PasskeyModal";


export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="teachcake"
            className="mb-12 h-10 w-fit"
          />


          <TeacherForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Teachcake
            </p>

            {/* <Link href="/?admin=true" className="text-green-500">
              Admin(這是原本用密碼登入的作法，因需求調整為透過Auth的email verified來判定是否為admin)
            </Link> */}
          </div>
        </div>
      </section >
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="teacher"
        className="side-img max-w-[50%]"
      />
    </div >
  )
}
