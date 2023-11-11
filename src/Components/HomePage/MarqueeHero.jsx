import React from "react";
import ItemMarqueeHero from "./ItemMarqueeHero";
import { bootstrap } from "@/Icons/bootstrap";
import { css } from "@/Icons/css";
import { figma } from "@/Icons/figma";
import { firebase } from "@/Icons/firebase";
import { framer } from "@/Icons/framer";
import { git } from "@/Icons/git";
import { html } from "@/Icons/html";
import { javascript } from "@/Icons/javascript";
import { nextjs } from "@/Icons/nextjs";
import { node } from "@/Icons/node";
import { php } from "@/Icons/php";
import { react } from "@/Icons/react";
import { redux } from "@/Icons/redux";
import { tailwindCss } from "@/Icons/tailwindCss";
import { typescript } from "@/Icons/typescript";
import { wordpress } from "@/Icons/wordpress";

function MarqueeHero() {
  return (
    <div className="mx-auto max-w-[900px]">
      <div className="overflow-x-hidden px-6">
        <div className="flex gap-6">
          <div className="flex shrink-0 items-center flex-row gap-6 animate-marquee">
            <ItemMarqueeHero text="Javascript" iconSvg={javascript} />
            <ItemMarqueeHero text="Typescript" iconSvg={typescript} />
            <ItemMarqueeHero text="React.js" iconSvg={react} />
            <ItemMarqueeHero text="Redux" iconSvg={redux} />
            <ItemMarqueeHero text="HTML" iconSvg={html} />
            <ItemMarqueeHero text="CSS" iconSvg={css} />
            <ItemMarqueeHero text="TailwindCSS" iconSvg={tailwindCss} />
            <ItemMarqueeHero text="Bootstrap" iconSvg={bootstrap} />
            <ItemMarqueeHero text="Git" iconSvg={git} />
            <ItemMarqueeHero text="Next.js" iconSvg={nextjs} />
            <ItemMarqueeHero text="Firebase" iconSvg={firebase} />
            <ItemMarqueeHero text="Figma" iconSvg={figma} />
            <ItemMarqueeHero text="Framer" iconSvg={framer} />
            <ItemMarqueeHero text="Wordpress" iconSvg={wordpress} />
            <ItemMarqueeHero text="Node" iconSvg={node} />
            <ItemMarqueeHero text="PHP" iconSvg={php} />
          </div>
          <div className="flex shrink-0 items-center flex-row gap-6 animate-marquee">
            <ItemMarqueeHero text="Javascript" iconSvg={javascript} />
            <ItemMarqueeHero text="Typescript" iconSvg={typescript} />
            <ItemMarqueeHero text="React.js" iconSvg={react} />
            <ItemMarqueeHero text="Redux" iconSvg={redux} />
            <ItemMarqueeHero text="HTML" iconSvg={html} />
            <ItemMarqueeHero text="CSS" iconSvg={css} />
            <ItemMarqueeHero text="TailwindCSS" iconSvg={tailwindCss} />
            <ItemMarqueeHero text="Bootstrap" iconSvg={bootstrap} />
            <ItemMarqueeHero text="Git" iconSvg={git} />
            <ItemMarqueeHero text="Next.js" iconSvg={nextjs} />
            <ItemMarqueeHero text="Firebase" iconSvg={firebase} />
            <ItemMarqueeHero text="Figma" iconSvg={figma} />
            <ItemMarqueeHero text="Framer" iconSvg={framer} />
            <ItemMarqueeHero text="Wordpress" iconSvg={wordpress} />
            <ItemMarqueeHero text="Node" iconSvg={node} />
            <ItemMarqueeHero text="PHP" iconSvg={php} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarqueeHero;
