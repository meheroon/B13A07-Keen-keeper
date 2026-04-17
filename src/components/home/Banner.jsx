export default function Banner() {
  return (
    <section className="py-10 text-center sm:py-14">
      <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-slate-800 sm:text-6xl">
        Friends to keep close in your life
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-base text-slate-500 sm:text-lg">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <button className="mt-8 rounded-md bg-[#255845] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#214b3b]">
        + Add a Friend
      </button>
    </section>
  );
}