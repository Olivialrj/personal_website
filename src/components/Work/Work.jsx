function Work() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 dark:text-white">
      <div className="flex flex-row gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
        <h1 className="mb-4">Work</h1>
      </div>
      <ol className="mt-6 space-y-4">
        <li className="flex gap-4">
          <div className="realtive mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinv-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img src="/postcredit.svg" alt="PostCredit Logo" />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-4">
            <dt hidden>Company</dt>
            <dd className="w-full flex-none text-sm font-medium ">
              PostCredit
            </dd>
            <dt hidden>Role</dt>
            <dd className=" text-sm">Software Engineer Intern</dd>
            <dt hidden>Date</dt>
            <dd className="ml-auto text-xs" aria-label="2019 until present">
              <time datetime="2024">2024</time>
              <span>-</span>
              <time datetime="2025">Present</time>
            </dd>
          </dl>
        </li>
        <li className="flex gap-4">
          <div className="realtive mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinv-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img src="public/commerzbank.png" alt="PostCredit Logo" />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-4">
            <dt hidden>Company</dt>
            <dd className="w-full flex-none text-sm font-medium ">
              Commerzbank AG
            </dd>
            <dt hidden>Role</dt>
            <dd className=" text-sm">Project Management Associate</dd>
            <dt hidden>Date</dt>
            <dd className="ml-auto text-xs" aria-label="2019 until present">
              <time datetime="2023">2023</time>
              <span>-</span>
              <time datetime="2024">2024</time>
            </dd>
          </dl>
        </li>
        <li className="flex gap-4">
          <div className="realtive mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinv-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              src="public/international_asset_monitor_logo.jpeg"
              alt="PostCredit Logo"
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-4">
            <dt hidden>Company</dt>
            <dd className="w-full flex-none text-sm font-medium ">
              IAM Advisory
            </dd>
            <dt hidden>Role</dt>
            <dd className=" text-sm">Sales Associate</dd>
            <dt hidden>Date</dt>
            <dd className="ml-auto text-xs" aria-label="2019 until present">
              <time datetime="2021">2021</time>
              <span>-</span>
              <time datetime="2023">2023</time>
            </dd>
          </dl>
        </li>
      </ol>
      <div className="flex flex-row gap-3 mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        <h1 className="mb-4">Education</h1>
      </div>
      <ol className="mt-6 space-y-4">
        <li className="flex gap-4">
          <div className="realtive mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinv-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img src="public/images.png" alt="PostCredit Logo" />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-4">
            <dt hidden>School</dt>
            <dd className="w-full flex-none text-sm font-medium ">Tripleten</dd>
            <dt hidden>Role</dt>
            <dd className=" text-sm">Certifcation in Software Engineering</dd>
            <dt hidden>Date</dt>
            <dd className="ml-auto text-xs" aria-label="2019 until present">
              <time datetime="2024"> June 2024</time>
              <span>-</span>
              <time datetime="2024"> Dec 2024</time>
            </dd>
          </dl>
        </li>
        <li className="flex gap-4">
          <div className="realtive mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinv-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              src="public/Shield_of_the_University_of_Birmingham.svg"
              alt="PostCredit Logo"
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-4">
            <dt hidden>School</dt>
            <dd className="w-full flex-none text-sm font-medium ">
              University of Birmingham
            </dd>
            <dt hidden>Role</dt>
            <dd className=" text-sm">B.S. Busines Management</dd>
            <dt hidden>Date</dt>
            <dd className="ml-auto text-xs" aria-label="2019 until present">
              <time datetime="2023">2023</time>
              <span>-</span>
              <time datetime="2024">2024</time>
            </dd>
          </dl>
        </li>
        <li className="flex gap-4">
          <div className="realtive mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinv-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              src="public/nyp-logo-png_seeklogo-305215.png"
              alt="PostCredit Logo"
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-4">
            <dt hidden>School</dt>
            <dd className="w-full flex-none text-sm font-medium ">
              Nanyang Polytechnic
            </dd>
            <dt hidden>Role</dt>
            <dd className=" text-sm">Aerospace Engineering</dd>
            <dt hidden>Date</dt>
            <dd className="ml-auto text-xs" aria-label="2019 until present">
              <time datetime="2021">2021</time>
              <span>-</span>
              <time datetime="2023">2023</time>
            </dd>
          </dl>
        </li>
      </ol>
      <a
        download
        className="inline-flex items-center gap-2 justify-center rounded-md py-3 px-4 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
        href="/public/Olivia_Lim_Resume.pdf"
      >
        Download CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 26 26"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </a>
    </div>
  );
}

export default Work;
