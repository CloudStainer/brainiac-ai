"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [961],
  {
    77: function (e, t, i) {
      var n = i(5893),
        r = i(3558),
        o = i(3717),
        a = i(7747),
        l = i(6089),
        s = i(4e3),
        m = i(1163),
        h = i(7294);
      let d = [
        {
          id: "when-ai-learns-to-think-beyond-data-and-code",
          article: "What Happens When AI Learns to Think Beyond Data and Code?",
          category: "Tech",
          description:
            'Back in March 2023, Jensen Huang—the CEO of Nvidia— made a bold statement: "In the near future, every pixel in a game will be generated, not rendered."',
          imageSRC:
            "/images/articles/whatHappensWhenAILernsToThinkBeyondDataAndCode/banner.png",
        },
        {
          id: "seven-mental-frameworks",
          article:
            "7 Mental Frameworks to Improve Your Prompt Engineering Skills",
          category: "Tech",
          description:
            "Are your AI interactions hitting a wall? You've typed out prompt after prompt, but the responses are lukewarm at best.",
          imageSRC: "/images/seven-mental-frameworks-thumb.png",
        },
        {
          id: "the-paradox-of-human-progress",
          article: "The Paradox of Human Progress",
          category: "Tech",
          description:
            "Emma stared blankly at her computer screen in her small apartment, the glow reflecting the confusion on her face. She had just received an email notifying her that her application for a much-needed loan had been denied. No explanation, no human to talk to—just a cold, automated message.",
          imageSRC: "/images/paradox-human-ptogress-thumb.png",
        },
        {
          id: "q4-and-beyond",
          article: "Q4 and Beyond",
          category: "Business",
          description:
            "Discover how Skillful AI is navigating the market's summer lull with strategic focus and anticipation for Q4 2024. This article highlights the upcoming launch of the AI Builder, the expansion of the Model Hub, and the introduction of user profiles, ratings, and prompt templates. Get a sneak peek into what's coming in 2025 as Skillful AI prepares to meet the world with innovative tools and platforms.",
          imageSRC: "/images/q4-thumbnail.png",
        },
        {
          id: "what-are-ai-agents",
          article: "WHAT IS AN AI AGENT?",
          category: "Tech",
          description:
            "From rudimentary algorithmic processes to today’s complex AI agents, the tech evolution has been remarkable. While efficient, these early systems were bound by a rigid set of rules, designed for specific tasks.\n        As the wheels of innovation turned, we witnessed a tectonic metamorphosis shift - not just in complexity but also in AI's ability to understand and interact. Although virtual assistants such as Siri and Cortana's understanding remained surface-level, they bridged the critical human-AI gap.",
          imageSRC: "/images/news1.png",
        },
        {
          id: "what-is-skillfulai",
          article: "WHAT IS SKILLFUL AI?",
          category: "Business",
          description:
            "It's easy to forget the times when office cubicles were graced not with computers, but with drafting tables and manual drafting tools. The era before 1982—before the AutoCAD —saw engineers creating drawings using pencils, T-squares, and other tools.\n\n        Each line, made by graphite on paper, was susceptible to errors that demanded a complete redrafting. One slip and start again. The patience and resilience of that era was unparalleled.",
          imageSRC: "/images/what-is-skillful.png",
        },
      ];
      t.Z = () => {
        let e = (0, r.S)({ base: !0, md: !1 }),
          [t, i] = (0, h.useState)(d[0]),
          c = (0, m.useRouter)();
        return (0, n.jsx)(n.Fragment, {
          children: e
            ? (0, n.jsxs)(o.k, {
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                position: "relative",
                children: [
                  (0, n.jsxs)(o.k, {
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    justifyContent: "end",
                    flexDir: "column",
                    alignItems: "center",
                    m: e ? "0" : "3rem",
                    children: [
                      (0, n.jsx)(a.xu, {
                        width: "100%",
                        height: "100%",
                        zIndex: -2,
                        backdropFilter: "blur(6.438432693481445px)",
                        position: "absolute",
                        bgImage: "/icons/news/Rectangle.svg",
                      }),
                      (0, n.jsx)(a.xu, {
                        width: "100%",
                        height: "100%",
                        zIndex: -1,
                        opacity: "0.5",
                        position: "absolute",
                        bgImage: "/icons/news/Rectangle2.svg",
                      }),
                      (0, n.jsxs)(a.xu, {
                        position: "static",
                        width: "100%",
                        children: [
                          (0, n.jsxs)(a.xu, {
                            position: "absolute",
                            width: "9.88206rem",
                            height: "1.79738rem",
                            top: "5px",
                            left: "5px",
                            children: [
                              (0, n.jsx)(l.E, {
                                position: "absolute",
                                alt: "Article category",
                                src: "/icons/news/category.svg",
                              }),
                              (0, n.jsx)(s.x, {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: 1,
                                color: "#EDEDED",
                                fontFamily: "heading",
                                fontSize: "0.6875rem",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "1.4305rem",
                                textTransform: "uppercase",
                                children: t.category,
                              }),
                            ],
                          }),
                          (0, n.jsx)(l.E, {
                            width: "100%",
                            height: "11.9375rem",
                            objectFit: "cover",
                            alt: t.article,
                            src: t.imageSRC,
                          }),
                        ],
                      }),
                      (0, n.jsxs)(o.k, {
                        width: "100%",
                        padding: "2.1rem",
                        flexDir: "column",
                        gap: "1rem",
                        children: [
                          (0, n.jsx)(s.x, {
                            color: "white",
                            fontFamily: "body",
                            fontSize: e ? "0.875rem" : "1.125rem",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                            textTransform: "uppercase",
                            children: t.article,
                          }),
                          (0, n.jsx)(a.xu, {
                            borderBottom: "2px dashed gray",
                            width: "100%",
                          }),
                          (0, n.jsx)(s.x, {
                            color: "#CECECE",
                            fontFamily: "body",
                            fontSize: e ? "0.875rem" : "1rem",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "140%",
                            h: "auto",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            css: {
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                            },
                            children: t.description,
                          }),
                          (0, n.jsxs)(o.k, {
                            gap: "1rem",
                            justifyContent: "end",
                            alignItems: "center",
                            cursor: "pointer",
                            onClick: () => {
                              c.push("/".concat(t.id));
                            },
                            children: [
                              (0, n.jsx)(s.x, {
                                color: "#E2E2E2",
                                fontFamily: "body",
                                fontSize: e ? "0.875rem" : "1rem",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "140%",
                                textDecorationLine: "underline",
                                textAlign: "right",
                                children: "Read Full Article",
                              }),
                              (0, n.jsx)(l.E, {
                                w: e ? "0.81888rem" : "1.32844rem",
                                h: e ? "0.81894rem" : "1.32844rem",
                                alt: "",
                                src: "/icons/arrow-right.svg",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(o.k, {
                    mt: "3",
                    gap: 2,
                    width: "100%",
                    justifyContent: "center",
                    children: d.map((e) =>
                      (0, n.jsx)(
                        a.xu,
                        {
                          width: "1.5rem",
                          height: "0.5rem",
                          bg:
                            t.id === e.id
                              ? "linear-gradient(112deg, #FF2091 10.81%, #0184FD 160.09%), rgba(255, 255, 255, 0.04)"
                              : "rgba(217, 217, 217, 0.10)",
                          borderRadius: "md",
                          cursor: "pointer",
                          onClick: () => i(e),
                        },
                        e.id
                      )
                    ),
                  }),
                ],
              })
            : (0, n.jsx)(o.k, {
                width: "100%",
                overflowX: "scroll",
                justify: "start",
                gap: "1rem",
                position: "relative",
                pt: "50px",
                children: d.map((e, t) =>
                  (0, n.jsxs)(
                    o.k,
                    {
                      width: "35.5625rem",
                      height: "31.1875rem",
                      position: "relative",
                      justifyContent: "end",
                      flexDir: "column",
                      alignItems: "center",
                      m: "3rem",
                      minWidth: "35.5625rem",
                      children: [
                        (0, n.jsx)(a.xu, {
                          width: "35.5625rem",
                          height: "31.1875rem",
                          zIndex: -2,
                          backdropFilter: "blur(6.438432693481445px)",
                          position: "absolute",
                          bgImage: "/icons/news/Rectangle.svg",
                        }),
                        (0, n.jsx)(a.xu, {
                          width: "35.5625rem",
                          height: "31.1875rem",
                          zIndex: -1,
                          opacity: "0.5",
                          position: "absolute",
                          bgImage: "/icons/news/Rectangle2.svg",
                        }),
                        (0, n.jsxs)(a.xu, {
                          position: "relative",
                          children: [
                            (0, n.jsxs)(a.xu, {
                              position: "absolute",
                              width: "16.03125rem",
                              height: "2.91588rem",
                              top: "-10px",
                              left: "-32px",
                              children: [
                                (0, n.jsx)(l.E, {
                                  position: "absolute",
                                  alt: "Article category",
                                  src: "/icons/news/category.svg",
                                }),
                                (0, n.jsx)(s.x, {
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  zIndex: 1,
                                  color: "#EDEDED",
                                  fontFamily: "heading",
                                  fontSize: "0.72975rem",
                                  fontStyle: "normal",
                                  fontWeight: "700",
                                  lineHeight: "1.4305rem",
                                  textTransform: "uppercase",
                                  children: e.category,
                                }),
                              ],
                            }),
                            (0, n.jsx)(l.E, {
                              width: "31.50231rem",
                              height: "19.31531rem",
                              alt: e.article,
                              src: e.imageSRC,
                            }),
                          ],
                        }),
                        (0, n.jsxs)(o.k, {
                          width: "100%",
                          padding: "2.1rem",
                          flexDir: "column",
                          gap: "1.5rem",
                          children: [
                            (0, n.jsx)(s.x, {
                              color: "white",
                              fontFamily: "body",
                              fontSize: "1.125rem",
                              fontStyle: "normal",
                              fontWeight: "600",
                              lineHeight: "normal",
                              textTransform: "uppercase",
                              children: e.article,
                            }),
                            (0, n.jsx)(a.xu, {
                              borderBottom: "2px dashed gray",
                              width: "100%",
                            }),
                            (0, n.jsx)(s.x, {
                              color: "#CECECE",
                              fontFamily: "body",
                              fontSize: "1rem",
                              fontStyle: "normal",
                              fontWeight: "400",
                              h: "auto",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              css: {
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                              },
                              children: e.description,
                            }),
                            (0, n.jsxs)(o.k, {
                              gap: "1rem",
                              justifyContent: "end",
                              alignItems: "center",
                              cursor: "pointer",
                              onClick: () => {
                                c.push("/".concat(e.id));
                              },
                              children: [
                                (0, n.jsx)(s.x, {
                                  color: "#E2E2E2",
                                  fontFamily: "body",
                                  fontSize: "1rem",
                                  fontStyle: "normal",
                                  fontWeight: "600",
                                  lineHeight: "140%",
                                  textDecorationLine: "underline",
                                  textAlign: "right",
                                  children: "Read Full Article",
                                }),
                                (0, n.jsx)(l.E, {
                                  w: "1.32844rem",
                                  h: "1.32844rem",
                                  alt: "",
                                  src: "/icons/arrow-right.svg",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
        });
      };
    },
    6389: function (e, t, i) {
      var n = i(5893),
        r = i(3558),
        o = i(3717),
        a = i(6089),
        l = i(4e3),
        s = i(2883);
      t.Z = () => {
        let e = (0, r.S)({ base: !0, lg: !1 });
        return (0, n.jsx)(o.k, {
          pl: "1rem",
          pr: "1rem",
          children: (0, n.jsxs)(o.k, {
            width: "100%",
            bg: "#0F0E15",
            borderTopEndRadius: "2rem",
            borderTopLeftRadius: "2rem",
            flexDir: "column",
            pl: e ? "1rem" : "5rem",
            pr: e ? "1rem" : "5rem",
            pt: "4rem",
            children: [
              (0, n.jsxs)(o.k, {
                flexDir: e ? "column" : "row",
                pb: "2rem",
                justifyContent: "space-between",
                gap: "3rem",
                children: [
                  (0, n.jsxs)(o.k, {
                    flexDir: "column",
                    gap: "0.5rem",
                    children: [
                      (0, n.jsx)(a.E, {
                        width: "17.6875rem",
                        height: "3.62025rem",
                        alt: "",
                        src: "./icons/logo.svg",
                      }),
                      (0, n.jsx)(l.x, {
                        mt: "5rem",
                        fontFamily: "heading",
                        fontSize: e ? "2.24138rem" : "3.25rem",
                        fontStyle: "normal",
                        fontWeight: "700",
                        children: "Let’s Talk",
                      }),
                      (0, n.jsx)(l.x, {
                        bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                        backgroundClip: "text",
                        fontFamily: "heading",
                        fontSize: e ? "1.63794rem" : "3.25rem",
                        fontStyle: "normal",
                        fontWeight: "700",
                        children: "contact@skillfulai.io",
                      }),
                    ],
                  }),
                  (0, n.jsxs)(o.k, {
                    flexDir: "column",
                    gap: "1rem",
                    children: [
                      (0, n.jsx)(l.x, {
                        fontFamily: "heading",
                        fontSize: e ? "1.44331rem" : "1.75rem",
                        fontStyle: "normal",
                        fontWeight: "700",
                        children: "Links",
                      }),
                      (0, n.jsx)(s.r, {
                        href: "https://drive.google.com/file/d/1QrR7I3-3k_WyUwVbfOMP0PT9_0LCFCuU/view",
                        isExternal: !0,
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "Whitepaper",
                        }),
                      }),
                      (0, n.jsx)(s.r, {
                        href: "https://skillful-ai.gitbook.io/skillful-ai-public-docs",
                        isExternal: !0,
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "Documentation",
                        }),
                      }),
                      (0, n.jsx)(s.r, {
                        href: "/documents/SKILLFUL_AI_PITCH_DECK.pdf",
                        download: "SKILLFUL_AI_PITCH_DECK.pdf",
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "Pitch Deck",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)(o.k, {
                    flexDir: "column",
                    gap: "1rem",
                    children: [
                      (0, n.jsx)(l.x, {
                        fontFamily: "heading",
                        fontSize: e ? "1.44331rem" : "1.75rem",
                        fontStyle: "normal",
                        fontWeight: "700",
                        children: "Legal",
                      }),
                      (0, n.jsx)(s.r, {
                        href: "/disclaimer",
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "Disclaimer",
                        }),
                      }),
                      (0, n.jsx)(s.r, {
                        href: "/privacy-policy",
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "Privacy Policy",
                        }),
                      }),
                      (0, n.jsx)(s.r, {
                        href: "/ai-refund-policy",
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "AI Refund policy",
                        }),
                      }),
                      (0, n.jsx)(s.r, {
                        href: "/terms-and-conditions",
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "Terms and Conditions",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)(o.k, {
                    flexDir: "column",
                    gap: "1rem",
                    children: [
                      (0, n.jsx)(l.x, {
                        fontFamily: "heading",
                        fontSize: e ? "1.44331rem" : "1.75rem",
                        fontStyle: "normal",
                        fontWeight: "700",
                        children: "Social",
                      }),
                      (0, n.jsx)(s.r, {
                        href: "https://discord.gg/WhAYqkXYkg",
                        isExternal: !0,
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "Discord",
                        }),
                      }),
                      (0, n.jsx)(s.r, {
                        href: "https://t.me/+oNknk6vJj-0wODgx",
                        isExternal: !0,
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "Telegram",
                        }),
                      }),
                      (0, n.jsx)(s.r, {
                        href: "https://www.linkedin.com/company/skillful-ai-io/about/",
                        isExternal: !0,
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "LinkedIn",
                        }),
                      }),
                      (0, n.jsx)(s.r, {
                        href: "https://www.instagram.com/skillfulai.io/",
                        isExternal: !0,
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "Instagram",
                        }),
                      }),
                      (0, n.jsx)(s.r, {
                        href: "https://twitter.com/SkillfulAI",
                        isExternal: !0,
                        children: (0, n.jsx)(l.x, {
                          fontFamily: "body",
                          fontSize: e ? "1.03094rem" : "1.25rem",
                          fontStyle: "normal",
                          fontWeight: "400",
                          children: "X",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(a.E, { alt: "", src: "/icons/line.svg" }),
              (0, n.jsx)(l.x, {
                textAlign: e ? "center" : "start",
                color: "#CECECE",
                fontFamily: "body",
                fontSize: e ? "0.875rem" : "1rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "3.10431rem",
                children:
                  "Copyright \xa9 2024 Skillful AI | All rights reserved",
              }),
            ],
          }),
        });
      };
    },
  },
]);
