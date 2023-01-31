import CardTestimoni from "../components/CardTestimoni";

function Testimoni() {
  return (
    <section className="testimoni ">
      <div className="mx-auto max-w-screen-2xl">
        <div className="container">
          <div className="h-[60rem] lg:h-auto pt-20 lg:pt-32 pb-28 flex flex-col gap-14 lg:gap-16 items-center">
            <h2 className="lg:w-[35rem] text-3xl lg:text-4xl font-bold text-white text-center">
              We are extremely satisfied with Makaryo's products
            </h2>
            <div className="lg:max-h-[1100px] flex lg:flex-col flex-wrap justify-center content-center gap-4">
              <CardTestimoni
                profile="1"
                name="Terry Torff"
                position="Sr. Product Designer"
                desk="Makaryo's job search platform is the best I've ever used, it's easy and quick in finding my dream job!"
              />
              <CardTestimoni
                profile="2"
                name="Jordyn Donin"
                position="Sr. Product Manager"
                desk="After using the Makaryo job seeker platform, I found it helpful in finding a job that suits my liking. The service provided by Makaryo is very satisfying."
              />
              <CardTestimoni
                profile="3"
                name="Anika Bergson"
                position="Jr. Front-End Developer"
                desk="I am very satisfied with the services provided by the Makaryo job seeker platform, easily accessible and fast in finding a job that suits my needs."
              />
              <CardTestimoni
                profile="4"
                name="Makenna"
                position="Jr. Content Creator"
                desk="After trying several other job seeker platforms, I finally found Makaryo which provides many job options that are right for me."
              />
              <CardTestimoni
                profile="5"
                name="Kadin Schleifer"
                position="Jr. Product Manager"
                desk="I am greatly helped by Makaryo's job search platform in finding the right job that matches my desires and skills. The service provided by Makaryo is extremely satisfying, easy to access, and quick in finding a job that suits my needs."
              />
              <CardTestimoni
                profile="6"
                name="Terry Passa"
                position="Jr. Back-End Developer"
                desk="Makaryo's platform has exceeded my expectations and made my job search process much easier. It provides a wide range of job options that match my skills."
              />
              <CardTestimoni
                profile="7"
                name="Cooper Philips"
                position="Jr. UI/UX Designer"
                desk="After using the Makaryo job seeker platform, I found it very helpful in finding a job that suits my wishes and abilities."
              />
              <CardTestimoni
                profile="10"
                name="Mira Workman"
                position="Jr. UI/UX Designer"
                desk="The Makaryo job seeker platform is the best choice for me who wants to find a job quickly and easily according to my abilities."
              />
              <CardTestimoni
                profile="8"
                name="Roger Rhiel"
                position="Sr. Full stack Dev"
                desk="Makaryo's job search platform has greatly simplified my job search process and I am extremely satisfied with the service provided. It has provided me with a wide range of job options that match my skills and experience and the user interface is very user-friendly and easy to navigate. I no longer have to spend hours looking for job opportunities, as Makaryo's platform has everything I need in one convenient location."
              />
              <CardTestimoni
                profile="9"
                name="Jordyn Geidt"
                position="Sr. Back-End Developer"
                desk="After using Makaryo's job search platform, I can confidently say that it is the best platform out there for finding the right job that matches your skills and experience. The service provided is top-notch and extremely satisfying, with a user-friendly interface and easy access to a wide range of job options that match my desires. I no longer have to spend hours scouring the internet for job opportunities, as Makaryo's platform has everything I need in one convenient location. I am extremely grateful to have found this platform and highly."
              />
            </div>
          </div>
        </div>
        <object
          className="absolute top-0 left-0"
          data="/background/circle-testimoni.svg"
          type="image/svg+xml"
        ></object>
        <object
          className="absolute bottom-0 right-0"
          data="/background/lines3.svg"
          type="image/svg+xml"
        ></object>
        <div className="absolute inset-x-0 bottom-24 z-10 text-center">
          <button className="py-3 px-20 rounded-2xl font-medium text-primary bg-white">
            Show More
          </button>
        </div>
        <div className="block absolute bottom-0 inset-x-0 h-96 lg:h-[40rem] bg-gradient-to-t from-[#2979FF] via-[#2978fff8] to-transparent"></div>
      </div>
    </section>
  );
}

export default Testimoni;
