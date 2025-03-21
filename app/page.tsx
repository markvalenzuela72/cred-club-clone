import ScrollToTop from "@/components/ScrollToTop";
import CanvasScroll from "@/components/CanvasScroll";
import VideoLockScroll from "@/components/VideoLockScroll";
import VideoResponsive from "@/components/VideoResponsive";
import Image from "next/image";
import RevealingQrCode from "@/components/RevealingQrCode";
import { assetBaseURL } from "./layout";

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
          <h1 className="font-[denton] block font-extrabold text-5xl md:text-7xl text-center mb-6 whitespace-pre-line">
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
      />
      <CanvasScroll
        assetImagesUrl={`${assetBaseURL}images/cards/desktop/unbilled/seq_v3/unbilled-`}
        frameCount={149}
        canvasHeight={450}
      />

      <VideoLockScroll
        posterDesktop={`${assetBaseURL}images/cards/desktop/single-card/single-card-fold-desktop-poster.jpg`}
        posterMobile={`${assetBaseURL}images/cards/mobile/single-card/single-card-fold-mobile-poster.jpg?tr=orig`}
        videoSrcDesktop={`${assetBaseURL}videos/cards/desktop/single-card/single-card.mp4?tr=q-95`}
        videoSrcMobile={`${assetBaseURL}videos/cards/mobile/single-card/single-card-fold-mobile.mp4?tr=q-95`}
      />
      <section className="px-4 py-8 md:px-32 md:py-24 w-full h-screen flex flex-col gap-6">
        <h1 className="font-[denton] block font-extrabold text-5xl md:text-7xl  mb-6 whitespace-pre-line">
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
        canvasHeight={700}
      />
      <CanvasScroll
        assetImagesUrl={`${assetBaseURL}images/cards/desktop/perks/seq_v2/perks-`}
        frameCount={325}
        canvasHeight={770}
      />
      <section className="px-4 py-8 md:px-32 md:py-24 w-full h-screen flex flex-col gap-6  justify-center items-center">
        <hr className="border border-black" />
        <div className="flex flex-col md:flex-row gap-8 justify-center align-center">
          <div className="w-full md:w-[60%]">
            <Image
              src={`${assetBaseURL}images/cards/lock.png?tr=orig`}
              alt="icon"
              width={70}
              height={70}
            />
            <h1 className="font-[denton] block font-extrabold text-5xl md:text-7xl  mb-6 whitespace-pre-line max-w-[70%]">
              the only thing we do with your data is protect it.
            </h1>
          </div>
          <div className="w-full md:w-[40%]">
            <p className="text-xl leading-10 mb-5 whitespace-pre-line tracking-wide min-w-[320px]">
              at CRED, security isn&apos;t an afterthought. it&apos;s built into
              everything we do. your data is encrypted, monitored, and protected
              at every step. we follow PCI DSS v4.0, ISO 27001, and RBI
              guidelines, ensuring top-tier safety standards. your card data is
              never stored—tokenization and masking keep your details secure.
            </p>
            <p className="text-xl leading-10 mb-5 whitespace-pre-line tracking-wide min-w-[320px]">
              there are no gaps, because we didn&apos;t leave any.
            </p>
          </div>
        </div>
      </section>
      <RevealingQrCode assetBaseURL={assetBaseURL} />
    </main>
  );
}
