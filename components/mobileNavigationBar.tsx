import { BiHomeHeart, BiStore, BiPhotoAlbum } from "react-icons/bi";
import {BsEnvelopePaperHeart, BsFillChatSquareHeartFill} from "react-icons/bs";
import Link  from 'next/link';
function MobileNavigationBar() {
  return (
    <div className="fixed bottom-0 w-full py-3 md:hidden bg-slate-300">
        <div className="flex flex-row items-center justify-around mx-8">
              <Link className="flex flex-col items-center justify-center" href="/">
                  <div className="icon">
                  <BiHomeHeart/>
                  </div>
                  <p>Home</p>
              </Link>
              <Link className="flex flex-col items-center justify-items-center" href="">
                  <div className="icon">
                  <BiStore/>
                  </div>
                  <p>Vendors</p>
              </Link>
              <Link className="flex flex-col items-center justify-items-center" href="">
                  <div className="icon">
                  <BsEnvelopePaperHeart/>
                  </div>
                  <p>E-Invites</p>
              </Link>
              <Link className="flex flex-col items-center justify-items-center" href="">
                  <div className="icon">
                  <BiPhotoAlbum/>
                  </div>
                  <p>Photos</p>
              </Link>
              <Link className="flex flex-col items-center justify-items-center" href="">
                  <div className="icon">
                  <BsFillChatSquareHeartFill/>
                  </div>
                  <p>Blogs</p>
              </Link>
            </div>
    </div>)
}

export default MobileNavigationBar