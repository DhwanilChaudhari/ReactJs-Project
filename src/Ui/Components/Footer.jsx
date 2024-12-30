import React from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "react-feather";

export default function Footer() {
  return (
    <>
      <div className="footer bg-gray-300 p-5 w-[1400px]">
        <div className="footertop">
          <div className="mt-2 ">
            <i className="title text-[45px]">Newsletter and Promotions</i>
            <p className="py-4">Sign up to receive our latest news</p>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center ">
              <input
                type="text"
                className="w-[400px] border border-black rounded-full bg-transparent placeholder:text-black"
                placeholder=" Email"
              />
              <ArrowRight className="ml-[-33px]" />
            </div>
          </div>
        </div>
        <div className="footermiddle py-10">
          <div className="flex justify-between ">
            <div>
              <img
                src="/src/assets/Logo.png"
                alt=" Logo"
                className="h-[100px] ml-[22px]"
              />
              <p className="w-[230px] mt-10 text-justify title italic text-[17px] font-semibold ">
                Nothing unlocks an old memory better than smell, be it the
                memory of lost love or of a fond friend.
              </p>
            </div>

            <div className="w-[225px]">
              <div className="text-justify text-[14px] ">
                <p className="text-xl font-bold">Customer Support</p>
              </div>
              <div className="mt-5">
                <ul className="text-justify leading-7 text-[14px]">
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Store Locator
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Shipping Policy
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Terms & Condition
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Refund & Returns
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[225px]">
              <div className="text-justify">
                <p className="text-xl font-bold">Shop</p>
              </div>
              <div className="mt-5">
                <ul className="text-justify text-[14px] leading-7">
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      MY PERFUME
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      DEODORANTS
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      COMBOS
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[225px]">
              <div className="text-justify">
                <p className="text-xl font-bold">Quick Links</p>
              </div>
              <div className="mt-5">
                <ul className="text-justify text-[14px] leading-7">
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Our Journey
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Travel Retail
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Exports
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Crafting Memories
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-black hover:text-[#a77743]">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footerbottom">
          <div className="flex justify-center">
            <ul className="flex items-center gap-4">
              <li>
                <a href="https://www.facebook.com/MyPerfume">
                  <div className="border border-solid border-[#bc8b57] rounded-full p-1">
                    <Facebook className="text-black w-6 h-6" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/MyPerfume">
                  <div className="border border-solid border-[#bc8b57] rounded-full p-1">
                    <Twitter className="text-black w-6 h-6" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/myperfumesin/">
                  <div className="border border-solid border-[#bc8b57] rounded-full p-1">
                    <Instagram className="text-black w-6 h-6" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/MyPerfume">
                  <div className="border border-solid border-[#bc8b57] rounded-full p-1">
                    <Youtube className="text-black w-6 h-6" />
                  </div>
                </a>
              </li>
            </ul>
            <div className="ml-4 ">
              <p>
                <a href="" className="text-black">
                  my.support@perfume-world.com
                </a>
              </p>
              <p>
                <a href="tel:+91-9930063303" className="text-black">
                  Toll Free +11-9988776655
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
