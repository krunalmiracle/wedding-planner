import React from 'react'
import { BiHomeHeart, BiStore, BiPhotoAlbum } from "react-icons/bi";
import {BsEnvelopePaperHeart, BsFillChatSquareHeartFill} from "react-icons/bs";
function BottomBar() {
  return (
    <div className="fixed bottom-0 w-full py-3 md:hidden bg-slate-300">
        <div className="flex flex-row items-center justify-around mx-8">
              <div className="flex flex-col items-center justify-center">
                  <div className="icon">
                  <BiHomeHeart/>
                  </div>
                  <p>Home</p>
              </div>
              <div className="flex flex-col items-center justify-items-center">
                  <div className="icon">
                  <BiStore/>
                  </div>
                  <p>Vendors</p>
              </div>
              <div className="flex flex-col items-center justify-items-center">
                  <div className="icon">
                  <BsEnvelopePaperHeart/>
                  </div>
                  <p>E-Invites</p>
              </div>
              <div className="flex flex-col items-center justify-items-center">
                  <div className="icon">
                  <BiPhotoAlbum/>
                  </div>
                  <p>Photos</p>
              </div>
              <div className="flex flex-col items-center justify-items-center">
                  <div className="icon">
                  <BsFillChatSquareHeartFill/>
                  </div>
                  <p>Blogs</p>
              </div>
            </div>
    </div>)
}

export default BottomBar