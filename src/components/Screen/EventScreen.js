import React from "react";
import Maps from "../Maps";
import Filter from "../Filter/button"

function EventScreen() {
    return (
        <div className="w-full text-black mt-8">
            <div className="container m-auto">
                <div className="flex gap-4">
                    <div className="flex w-2/3 justify-start">
                        <div>
                            <Filter />
                            <div className="flex gap-6">
                                <div class="flex w-1/3 items-center justify-center mt-5">
                                    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-xl duration-200">
                                        <img src="https://s1.ticketm.net/dam/a/087/d26e3794-731e-478c-b0ba-4b4648bd0087_1772721_RETINA_PORTRAIT_16_9.jpg" alt="plant" class="h-auto w-full" />
                                        <div class="p-4">
                                            <div>
                                                <span className="text-xs text-gray-400">11-Mar - 12-Mar</span>
                                            </div>
                                            <div className="">
                                                <h3 className="text-md text-gray-600">Well, aren't you going uh3</h3>
                                            </div>
                                            <div className="flex mt-1">

                                                <span className="text-sm text-gray-400 ml-0.5">
                                                    BookMeBus, Phnom Penh
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-red-600 font-bold px-4">
                                            <span>$10.00</span>
                                        </div>
                                        <div className="border-t border-gray-300 mt-3 mb-4 p-4">
                                            <div
                                                className="flex items-center space-x-3 w-full"
                                            >
                                                <img
                                                    className="object-cover w-8 h-8 border-2 border-green-400 rounded-full"
                                                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                    alt="profile users"
                                                    loading="lazy"
                                                />
                                                <div className="">
                                                    <p className="text-sm font-semibold tracking-wide text-gray-600">
                                                        Author
                                                    </p>
                                                    <p className="text-xs tracking-wider text-gray-600">
                                                        2 Hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="flex w-1/3 items-center justify-center mt-5">
                                    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-xl duration-200">
                                        <img src="https://s1.ticketm.net/dam/a/729/c886aac1-6740-4f40-a8fa-86f70d168729_1596801_TABLET_LANDSCAPE_LARGE_16_9.jpg" alt="plant" class="h-auto w-full" />
                                        <div class="p-4">
                                            <div>
                                                <span className="text-xs text-gray-400">11-Mar - 12-Mar</span>
                                            </div>
                                            <div className="">
                                                <h3 className="text-md text-gray-600">Well, aren't you going uh3</h3>
                                            </div>
                                            <div className="flex mt-1">
                                                <span>
                                                </span>
                                                <span className="text-sm text-gray-400 ml-0.5">
                                                    BookMeBus, Phnom Penh
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-red-600 font-bold px-4">
                                            <span>$10.00</span>
                                        </div>
                                        <div className="border-t border-gray-300 mt-3 mb-4 p-4">
                                            <div
                                                className="flex items-center space-x-3 w-full"
                                            >
                                                <img
                                                    className="object-cover w-8 h-8 border-2 border-green-400 rounded-full"
                                                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                    alt="profile users"
                                                    loading="lazy"
                                                />
                                                <div className="">
                                                    <p className="text-sm font-semibold tracking-wide text-gray-600">
                                                        Author
                                                    </p>
                                                    <p className="text-xs tracking-wider text-gray-600">
                                                        2 Hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mt-3 p-4">
                                            <span>$ 300.44</span>
                                        </div> */}
                                    </div>

                                </div>

                                <div class="flex w-1/3 items-center justify-center mt-5">
                                    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-xl duration-200">
                                        <img src="https://www.thelist.com/img/gallery/2021-music-festivals-you-need-to-have-on-your-radar/l-intro-1628720166.jpg" alt="plant" class="h-auto w-full" />
                                        <div class="p-4">
                                            <div>
                                                <span className="text-xs text-gray-400">11-Mar - 12-Mar</span>
                                            </div>
                                            <div className="">
                                                <h3 className="text-md text-gray-600">Well, aren't you going uh3</h3>
                                            </div>
                                            <div className="flex mt-1">
                                                <span>
                                                </span>
                                                <span className="text-sm text-gray-400 ml-1">
                                                    BookMeBus, Phnom Penh
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-red-600 font-bold px-4">
                                            <span>$10.00</span>
                                        </div>
                                        <div className="border-t border-gray-300 mt-4 mb-4 p-4">
                                            <div
                                                className="flex items-center space-x-3 w-full"
                                            >
                                                <img
                                                    className="object-cover w-8 h-8 border-2 border-green-400 rounded-full"
                                                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                    alt="profile users"
                                                    loading="lazy"
                                                />
                                                <div className="">
                                                    <p className="text-sm font-semibold tracking-wide text-gray-600">
                                                        Author
                                                    </p>
                                                    <p className="text-xs tracking-wider text-gray-600">
                                                        2 Hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mt-3 p-4">
                                            <span>$ 300.44</span>
                                        </div> */}
                                    </div>

                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div class="flex w-1/3 items-center justify-center mt-5">
                                    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-xl duration-200">
                                        <img src="https://digitalhub.fifa.com/transform/4377dffe-e4e5-4af4-9b1b-f5da1eef9b4b/Captains-The-Chosen-Few" alt="plant" class="h-auto w-full" />
                                        <div class="p-4">
                                            <div>
                                                <span className="text-xs text-gray-400">11-Mar - 12-Mar</span>
                                            </div>
                                            <div className="">
                                                <h3 className="text-md text-gray-600">Well, aren't you going uh3</h3>
                                            </div>
                                            <div className="flex mt-1">
                                                <span>
                                                </span>
                                                <span className="text-sm text-gray-400 ml-1">
                                                    BookMeBus, Phnom Penh
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-red-600 font-bold px-4">
                                            <span>$10.00</span>
                                        </div>
                                        <div className="border-t border-gray-300 mt-4 mb-4 p-4">
                                            <div
                                                className="flex items-center space-x-3 w-full"
                                            >
                                                <img
                                                    className="object-cover w-8 h-8 border-2 border-green-400 rounded-full"
                                                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                    alt="profile users"
                                                    loading="lazy"
                                                />
                                                <div className="">
                                                    <p className="text-sm font-semibold tracking-wide text-gray-600">
                                                        Author
                                                    </p>
                                                    <p className="text-xs tracking-wider text-gray-600">
                                                        2 Hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mt-3 p-4">
                                            <span>$ 300.44</span>
                                        </div> */}
                                    </div>

                                </div>

                                <div class="flex w-1/3 items-center justify-center mt-5">
                                    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-xl duration-200">
                                        <img src="https://www.withinnigeria.com/news/wp-content/uploads/sites/5/2021/11/ify_davies/2021/11/17/skysports-world-cup-raheem-sterling_5316432.jpg" alt="plant" class="h-auto w-full" />
                                        <div class="p-4">
                                            <div>
                                                <span className="text-xs text-gray-400">11-Mar - 12-Mar</span>
                                            </div>
                                            <div className="">
                                                <h3 className="text-md text-gray-600">Well, aren't you going uh3</h3>
                                            </div>
                                            <div className="flex mt-1">
                                                <span>
                                                </span>
                                                <span className="text-sm text-gray-400 ml-1">
                                                    BookMeBus, Phnom Penh
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-red-600 font-bold px-4">
                                            <span>$10.00</span>
                                        </div>
                                        <div className="border-t border-gray-300 mt-4 mb-4 p-4">
                                            <div
                                                className="flex items-center space-x-3 w-full"
                                            >
                                                <img
                                                    className="object-cover w-8 h-8 border-2 border-green-400 rounded-full"
                                                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                    alt="profile users"
                                                    loading="lazy"
                                                />
                                                <div className="">
                                                    <p className="text-sm font-semibold tracking-wide text-gray-600">
                                                        Author
                                                    </p>
                                                    <p className="text-xs tracking-wider text-gray-600">
                                                        2 Hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mt-3 p-4">
                                            <span>$ 300.44</span>
                                        </div> */}
                                    </div>

                                </div>

                                <div class="flex w-1/3 items-center justify-center mt-5">
                                    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-xl duration-200">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpLaVAEMyYoMnSxkgfLhXZSs1rt5SkWjAFD6Ir6ii7R1Sql3iJJIKrgtcTN6rZjL_VMA&usqp=CAU" alt="plant" class="h-auto w-full" />
                                        <div class="p-4">
                                            <div>
                                                <span className="text-xs text-gray-400">11-Mar - 12-Mar</span>
                                            </div>
                                            <div className="">
                                                <h3 className="text-md text-gray-600">Well, aren't you going uh3</h3>
                                            </div>
                                            <div className="flex mt-1">
                                                <span>
                                                </span>
                                                <span className="text-sm text-gray-400 ml-1">
                                                    BookMeBus, Phnom Penh
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-red-600 font-bold px-4">
                                            <span>$10.00</span>
                                        </div>
                                        <div className="border-t border-gray-300 mt-4 mb-4 p-4">
                                            <div
                                                className="flex items-center space-x-3 w-full"
                                            >
                                                <img
                                                    className="object-cover w-8 h-8 border-2 border-green-400 rounded-full"
                                                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                    alt="profile users"
                                                    loading="lazy"
                                                />
                                                <div className="">
                                                    <p className="text-sm font-semibold tracking-wide text-gray-600">
                                                        Author
                                                    </p>
                                                    <p className="text-xs tracking-wider text-gray-600">
                                                        2 Hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mt-3 p-4">
                                            <span>$ 300.44</span>
                                        </div> */}
                                    </div>

                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div class="flex w-1/3 items-center justify-center mt-5">
                                    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-xl duration-200">
                                        <img src="https://thumbs.dreamstime.com/b/business-speaker-giving-talk-conference-hall-event-audience-entrepreneurship-concept-76866426.jpg" alt="plant" class="h-auto w-full" />
                                        <div class="p-4">
                                            <div>
                                                <span className="text-xs text-gray-400">11-Mar - 12-Mar</span>
                                            </div>
                                            <div className="">
                                                <h3 className="text-md text-gray-600">Well, aren't you going uh3</h3>
                                            </div>
                                            <div className="flex mt-1">
                                                <span>
                                                </span>
                                                <span className="text-sm text-gray-400 ml-1">
                                                    BookMeBus, Phnom Penh
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-red-600 font-bold px-4">
                                            <span>$10.00</span>
                                        </div>
                                        <div className="border-t border-gray-300 mt-4 mb-4 p-4">
                                            <div
                                                className="flex items-center space-x-3 w-full"
                                            >
                                                <img
                                                    className="object-cover w-8 h-8 border-2 border-green-400 rounded-full"
                                                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                    alt="profile users"
                                                    loading="lazy"
                                                />
                                                <div className="">
                                                    <p className="text-sm font-semibold tracking-wide text-gray-600">
                                                        Author
                                                    </p>
                                                    <p className="text-xs tracking-wider text-gray-600">
                                                        2 Hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mt-3 p-4">
                                            <span>$ 300.44</span>
                                        </div> */}
                                    </div>

                                </div>

                                <div class="flex w-1/3 items-center justify-center mt-5">
                                    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-xl duration-200">
                                        <img src="https://media.slidesgo.com/storage/8857150/leadership-training-event-for-business1626957387.jpg" alt="plant" class="h-auto w-full" />
                                        <div class="p-4">
                                            <div>
                                                <span className="text-xs text-gray-400">11-Mar - 12-Mar</span>
                                            </div>
                                            <div className="">
                                                <h3 className="text-md text-gray-600">Well, aren't you going uh3</h3>
                                            </div>
                                            <div className="flex mt-1">
                                                <span>
                                                </span>
                                                <span className="text-sm text-gray-400 ml-1">
                                                    BookMeBus, Phnom Penh
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-red-600 font-bold px-4">
                                            <span>$10.00</span>
                                        </div>
                                        <div className="border-t border-gray-300 mt-4 mb-4 p-4">
                                            <div
                                                className="flex items-center space-x-3 w-full"
                                            >
                                                <img
                                                    className="object-cover w-8 h-8 border-2 border-green-400 rounded-full"
                                                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                    alt="profile users"
                                                    loading="lazy"
                                                />
                                                <div className="">
                                                    <p className="text-sm font-semibold tracking-wide text-gray-600">
                                                        Author
                                                    </p>
                                                    <p className="text-xs tracking-wider text-gray-600">
                                                        2 Hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mt-3 p-4">
                                            <span>$ 300.44</span>
                                        </div> */}
                                    </div>

                                </div>

                                <div class="flex w-1/3 items-center justify-center mt-5">
                                    <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-xl duration-200">
                                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/leadership-training-workshop-seminar-network-design-template-d51f2c88e56e880dbfd6f30d5afc50b2_screen.jpg?ts=1574267040" alt="plant" class="h-auto w-full" />
                                        <div class="p-4">
                                            <div>
                                                <span className="text-xs text-gray-400">11-Mar - 12-Mar</span>
                                            </div>
                                            <div className="">
                                                <h3 className="text-md text-gray-600">Well, aren't you going uh3</h3>
                                            </div>
                                            <div className="flex mt-1">
                                                <span>
                                                </span>
                                                <span className="text-sm text-gray-400 ml-1">
                                                    BookMeBus, Phnom Penh
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-2xl text-red-600 font-bold px-4">
                                            <span>$10.00</span>
                                        </div>
                                        <div className="border-t border-gray-300 mt-4 mb-4 p-4">
                                            <div
                                                className="flex items-center space-x-3 w-full"
                                            >
                                                <img
                                                    className="object-cover w-8 h-8 border-2 border-green-400 rounded-full"
                                                    src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                    alt="profile users"
                                                    loading="lazy"
                                                />
                                                <div className="">
                                                    <p className="text-sm font-semibold tracking-wide text-gray-600">
                                                        Author
                                                    </p>
                                                    <p className="text-xs tracking-wider text-gray-600">
                                                        2 Hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mt-3 p-4">
                                            <span>$ 300.44</span>
                                        </div> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/3 justify-end ">
                        <Maps />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EventScreen