import ScrollToTop from "@/components/ScrollToTop";
import CanvasScroll from "@/components/CanvasScroll";
import VideoLockScroll from "@/components/VideoLockScroll";
import VideoResponsive from "@/components/VideoResponsive";
import Image from "next/image";

const assetBaseURL = "https://web-images.credcdn.in/v2/_next/assets/";

export default function Home() {
  return (
    <main>
      {/* TODO: Fix Late */}
      <ScrollToTop />
      <VideoResponsive
        posterDesktop={`${assetBaseURL}images/cards/desktop/hero-fold/hero-fold-desktop-poster.jpg`}
        posterMobile={`${assetBaseURL}images/cards/mobile/hero-fold/hero-fold-mobile-poster.jpg`}
        videoSrcDesktop={`${assetBaseURL}videos/cards/desktop/hero-fold/hero-fold-desktop-video.mp4?tr=q-95`}
        videoSrcMobile={`${assetBaseURL}videos/cards/mobile/hero-fold/hero-fold-mobile.mp4?tr=q-95`}
      />

      <section className="px-4 py-4 md:px-32 md:py-24 w-full h-screen flex justify-center">
        <div className="flex items-center justify-center flex-col">
          <p className="text-gray-600 uppercase font-semibold text-lg mb-2 text-center">
            credit card management. reimagined.
          </p>
          <h1 className="block font-extrabold text-5xl md:text-7xl text-center mb-6 whitespace-pre-line">
            everything you need.{"\n"}
            nothing you don&apos;t.
          </h1>

          <p className="text-center text-xl leading-8 mb-5 whitespace-pre-line tracking-wide">
            welcome to a credit card experience designed to feel like second
            nature.{"\n"}
            like muscle memory. life&apos;s logistics demand enough of your
            time, effort, and{"\n"}
            attention—managing your credit cards shouldn&apos;t add to the list.
          </p>

          <p className="text-center text-xl leading-8">
            you can put your admin duties to rest. for good.
          </p>
        </div>
      </section>

      <VideoLockScroll
        posterDesktop={`${assetBaseURL}images/cards/desktop/hero-fold/hero-fold-desktop-poster.jpg`}
        posterMobile={`${assetBaseURL}images/cards/mobile/hero-fold/hero-fold-mobile-poster.jpg?tr=orig`}
        videoSrcDesktop={`${assetBaseURL}videos/cards/desktop/multi-card/multi-card-desktop-video.mp4?tr=q-95`}
        videoSrcMobile={`${assetBaseURL}videos/cards/mobile/multi-card/multi-card-mobile-video.mp4?tr=q-95`}
        viewPort={0}
      />
      <CanvasScroll
        assetImagesUrl={`${assetBaseURL}images/cards/desktop/unbilled/seq_v3/unbilled-`}
        frameCount={149}
      />

      <VideoLockScroll
        posterDesktop={`${assetBaseURL}images/cards/desktop/single-card/single-card-fold-desktop-poster.jpg`}
        posterMobile={`${assetBaseURL}images/cards/mobile/single-card/single-card-fold-mobile-poster.jpg?tr=orig`}
        videoSrcDesktop={`${assetBaseURL}videos/cards/desktop/single-card/single-card.mp4?tr=q-95`}
        videoSrcMobile={`${assetBaseURL}videos/cards/mobile/single-card/single-card-fold-mobile.mp4?tr=q-95`}
        viewPort={5000}
      />
      <section className="px-4 py-8 md:px-32 md:py-24 w-full h-screen flex flex-col gap-6">
        <h1 className="block font-extrabold text-5xl md:text-7xl  mb-6 whitespace-pre-line">
          every touch is {"\n"}
          pure power.
        </h1>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col gap-3">
            <video
              autoPlay
              poster={`${assetBaseURL}images/cards/desktop/interactions/swipe-fallback.jpg?tr=orig`}
              loop
              muted={true}
            >
              <source
                src={`${assetBaseURL}videos/cards/desktop/interactions/swipe.mp4?tr=q-95`}
                type="video/mp4"
              />
            </video>
            <div className="flex gap-2 items-center ">
              <Image
                src={`${assetBaseURL}images/cards/swipe-left.png?tr=orig`}
                alt="icon"
                width={32}
                height={32}
              />
              <p className="font-bold">
                SWIPE LEFT{" "}
                <span className="font-normal">
                  on any card to manage payment history, card offers, and more.
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <video
              autoPlay
              poster={`${assetBaseURL}images/cards/desktop/interactions/long-press-fallback.jpg?tr=orig`}
              loop
              muted={true}
            >
              <source
                src={`${assetBaseURL}videos/cards/desktop/interactions/long-press.mp4?tr=q-95`}
                type="video/mp4"
              />
            </video>
            <div className="flex gap-2 items-center ">
              <Image
                src={`${assetBaseURL}images/cards/tap-hold.png?tr=orig`}
                alt="icon"
                width={32}
                height={32}
              />
              <p className="font-bold">
                PRESS AND HOLD{" "}
                <span className="font-normal">
                  a card to view balances, usage limits, recent activity and
                  other key details.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <video
              autoPlay
              poster={`${assetBaseURL}images/cards/desktop/interactions/smart-nav-fallback.jpg?tr=orig`}
              loop
              muted={true}
            >
              <source
                src={`${assetBaseURL}videos/cards/desktop/interactions/smart-nav.mp4?tr=q-95`}
                type="video/mp4"
              />
            </video>
            <div className="flex gap-2 items-center ">
              <Image
                src={`${assetBaseURL}images/cards/smart-nav.png?tr=orig`}
                alt="icon"
                width={32}
                height={32}
              />
              <p className="font-bold">
                SMART NAVIGATION{" "}
                <span className="font-normal">
                  a card to view balances, usage limits, recent activity and
                  other key details.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <CanvasScroll
        assetImagesUrl={`${assetBaseURL}images/cards/desktop/smart-statements/ss_seq/ss-`}
        frameCount={194}
      />
      {/*<CanvasScroll
        assetImagesUrl={`${assetBaseURL}images/cards/desktop/smart-statements/ss_seq/ss-`}
        frameCount={194}
      />
      <CanvasScroll
        assetImagesUrl={`${assetBaseURL}images/cards/desktop/smart-statements/ss_seq/ss-`}
        frameCount={194}
      /> */}
    </main>
  );
}
