(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(4184);
        },
      ]);
    },
    4184: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return eI;
          },
        });
      var r,
        n,
        o,
        a = i(5893),
        l = i(7294),
        s = i(4085),
        m = i(169),
        c = i(7747),
        d = i(6089),
        h = i(9382),
        g = i(6143);
      let p = {
          AWS: "/icons/brands/AWS.svg",
          Ethereum: "/icons/brands/Ethereum.svg",
          HuggingFace: "/icons/brands/HuggingFace.svg",
          LangChain: "/icons/brands/LangChain.svg",
          PyTorch: "/icons/brands/PyTorch.svg",
          TensorFlow: "/icons/brands/TensorFlow.svg",
          WalletConnect: "/icons/brands/WalletConnect.svg",
          Skcale: "/icons/brands/Skale.svg",
          Nillion: "/icons/brands/nillion.svg",
          Base: "/icons/brands/base.svg",
          Thirdweb: "/icons/brands/thirdweb.svg",
          ElevenLabs: "/icons/brands/ElevenLabs.svg",
        },
        x = [
          "AWS",
          "Ethereum",
          "HuggingFace",
          "ElevenLabs",
          "LangChain",
          "PyTorch",
          "TensorFlow",
          "WalletConnect",
          "Skcale",
          "Nillion",
          "Base",
          "Thirdweb",
        ],
        b = () =>
          x.map((e) =>
            (0, a.jsx)(
              c.xu,
              {
                width: "fit-content",
                sx: {
                  ml: "40px",
                  mr: "40px",
                  flexShrink: 0,
                  img: { width: "147px", height: "auto", maxHeight: "100px" },
                },
                children: (0, a.jsx)(c.xu, {
                  opacity: "0.3",
                  width: { base: "80px", lg: "130px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "6rem",
                  children: (0, a.jsx)(d.E, {
                    src: p[e],
                    alt: e,
                    boxSize: "8rem",
                    objectFit: "contain",
                  }),
                }),
              },
              e
            )
          );
      var f = () => {
          let [e, t] = (0, h.Z)({ loop: !0 }, [
            (0, g.Z)({
              speed: 2,
              playOnInit: !0,
              pauseOnMouseEnter: !1,
              stopOnInteraction: !1,
            }),
          ]);
          return (
            (0, l.useEffect)(() => {
              t && t.reInit();
            }, [t]),
            (0, a.jsx)(c.xu, {
              borderBottom: "1px solid rgba(245, 247, 250, 0.05)",
              borderTop: "1px solid rgba(245, 247, 250, 0.05)",
              width: "100%",
              position: "relative",
              bgGradient:
                "linear(to-r, #0a090f, rgba(10, 9, 15, 0) 15%, rgba(10, 9, 15, 0) 85%, #0a090f)",
              height: "8.813rem",
              display: "flex",
              alignItems: "center",
              sx: {
                ".embla": { overflow: "hidden", width: "100%" },
                ".embla__container": { display: "flex" },
                ".embla__slide": { minWidth: "15%", flexShrink: 0 },
              },
              children: (0, a.jsx)("div", {
                className: "embla",
                ref: e,
                children: (0, a.jsx)("div", {
                  className: "embla__container",
                  children: b().map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      { className: "embla__slide", children: e },
                      t
                    )
                  ),
                }),
              }),
            })
          );
        },
        u = i(967),
        w = i(3558),
        j = i(3717),
        v = i(4e3),
        y = i(4225),
        k = i(5541),
        S = i(9778),
        F = i(4581),
        I = i(6205),
        E = i(4346),
        z = i(1163),
        C = () => {
          let e = (0, z.useRouter)(),
            { isOpen: t, onOpen: i, onClose: r } = (0, u.q)(),
            n = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(c.xu, {
            position: "relative",
            width: "100%",
            height: "fit-content",
            borderBottom: "1px solid rgba(245, 247, 250, 0.05)",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "85%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsxs)(j.k, {
                fontFamily: "heading",
                textAlign: "left",
                direction: { base: "column", lg: "row" },
                align: { base: "center", lg: "start" },
                width: "100%",
                height: "100%",
                pt: { base: "5rem", lg: "12rem" },
                pr: "2rem",
                p: { base: "2rem", lg: "none" },
                gap: "2rem",
                children: [
                  (0, a.jsx)(c.xu, {
                    position: "relative",
                    width: { base: "100%", lg: "38%" },
                    height: { base: "auto", lg: "29.469rem" },
                    children: (0, a.jsx)(d.E, {
                      cursor: "pointer",
                      width: "100%",
                      height: "100%",
                      src: "/icons/Video.svg",
                      alt: "",
                      mb: { base: "2rem", lg: "0" },
                      onClick: i,
                    }),
                  }),
                  (0, a.jsxs)(j.k, {
                    width: { base: "100%", lg: "60%" },
                    flexDir: "column",
                    height: "auto",
                    alignItems: { base: "center", lg: "baseline" },
                    gap: "1rem",
                    children: [
                      (0, a.jsx)(v.x, {
                        fontFamily: "heading",
                        fontSize: n ? "2rem" : "5rem",
                        lineHeight: n ? "2.05044rem" : "4.375rem",
                        fontWeight: "bold",
                        children: "What is Skillful AI?",
                      }),
                      (0, a.jsxs)(c.xu, {
                        fontSize: n ? "0.875rem" : "1.25rem",
                        lineHeight: n ? "1.3125rem" : " 1.875rem ",
                        fontFamily: "body",
                        color: "#cecece",
                        children: [
                          (0, a.jsx)(v.x, {
                            margin: "0",
                            whiteSpace: "pre-wrap",
                            textAlign: "justify",
                            children:
                              "Skillful AI is an advanced platform that empowers individuals by providing a personalized AI ecosystem. It enables users to stay current with rapid technological advancements, offering customized virtual assistants trained in domain-specific knowledge. With a focus on context and user-specific memories, Skillful AI ensures comprehensive and tailored interactions. Additionally, it embraces developers, granting access to tools for creating and monetizing assistants, fostering a collaborative and dynamic ecosystem powered by blockchain technology. Skillful AI is a gateway to harnessing the benefits of AI and staying ahead in a dynamic digital world.",
                          }),
                          (0, a.jsx)(v.x, { margin: "0", children: "\xa0" }),
                        ],
                      }),
                      (0, a.jsx)(v.x, {
                        textAlign: "left",
                        fontSize: n ? "1.5rem" : "3.875rem",
                        lineHeight: n ? "1.78681rem" : "3.8125rem",
                        textTransform: "capitalize",
                        bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                        backgroundClip: "text",
                        mb: n ? "1rem" : "3rem",
                        children:
                          "The possibilities are beyond your imagination",
                      }),
                      (0, a.jsxs)(y.z, {
                        height: { base: "3rem", lg: "72px" },
                        width: { base: "250px", lg: "350px" },
                        textAlign: "center",
                        fontSize: { base: "0.8rem", lg: "1.125rem" },
                        backgroundColor: "transparent",
                        position: "relative",
                        onClick: () => {
                          e.push("/what-is-skillfulai");
                        },
                        children: [
                          (0, a.jsx)(d.E, {
                            position: "absolute",
                            height: "100%",
                            width: "75.65%",
                            top: "0%",
                            right: "24.35%",
                            bottom: "0%",
                            left: n ? "-1%" : "0",
                            maxWidth: "100%",
                            overflow: "hidden",
                            maxHeight: "100%",
                            src: "/icons/button/Rectangle 196.svg",
                            alt: "",
                          }),
                          (0, a.jsx)(v.x, {
                            position: "absolute",
                            top: "calc(50% - 6px)",
                            left: "12.75%",
                            textTransform: "uppercase",
                            fontWeight: "500",
                            color: "gray.400",
                            children: "Learn More",
                          }),
                          (0, a.jsx)(d.E, {
                            position: "absolute",
                            width: "2.32%",
                            top: "calc(50% - 25px)",
                            right: "97.68%",
                            left: "0%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            height: "3.131rem",
                            objectFit: "contain",
                            src: "/icons/button/Vector 73.svg",
                            alt: "",
                          }),
                          (0, a.jsx)(d.E, {
                            position: "absolute",
                            height: "100%",
                            width: "50.14%",
                            top: "0%",
                            right: "0%",
                            bottom: "0%",
                            left: "49.86%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            maxHeight: "100%",
                            src: "/icons/button/Vector 75.svg",
                            alt: "",
                          }),
                          (0, a.jsx)(d.E, {
                            position: "absolute",
                            width: "11.88%",
                            top: "calc(50% - 9px)",
                            right: "11.01%",
                            left: "77.1%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            height: "0.563rem",
                            src: "/icons/button/Vector 78.svg",
                            alt: "",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(W, {}),
              (0, a.jsxs)(k.u_, {
                isOpen: t,
                onClose: r,
                isCentered: !0,
                children: [
                  (0, a.jsx)(S.Z, {
                    bg: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(25px)",
                    background:
                      "linear-gradient(137deg, rgba(10, 9, 15, 0.20) -4.79%, rgba(10, 9, 15, 0.20) 116.5%)",
                    boxShadow:
                      "0px 1px 2px 0px rgba(9, 13, 20, 0.24), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 4px 4px 0px rgba(9, 13, 20, 0.12)",
                  }),
                  (0, a.jsxs)(F.h, {
                    minH: "25rem",
                    maxW: "50rem",
                    borderRadius: "1.25rem",
                    border: "2px solid rgba(255, 255, 255, 0.20)",
                    children: [
                      (0, a.jsx)(I.o, {
                        color: "white",
                        _focus: { boxShadow: "none" },
                        _hover: { bg: "rgba(255, 255, 255, 0.1)" },
                      }),
                      (0, a.jsx)(E.f, {
                        p: "0",
                        children: (0, a.jsx)(c.xu, {
                          as: "iframe",
                          width: "100%",
                          height: "25rem",
                          src: "https://www.youtube.com/embed/2s3ix1H3AYA",
                          allowFullScreen: !0,
                          borderRadius: "1.25rem",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      let W = () => (
          (0, w.S)({ base: !0, lg: !1 }),
          (0, a.jsx)(j.k, {
            width: "100%",
            textAlign: "center",
            color: "white",
            fontFamily: "heading",
            gap: { base: "2rem", lg: "4rem" },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            mt: "4rem",
            mb: "4rem",
            children: [
              {
                src: "/gifs/ai-marketplace.gif",
                name: "AI Marketplace",
                description:
                  "The SkillfulAI marketplace is a dynamic platform where you can buy, sell, or trade AI skills and assistants. But we take it a step further with the integration of NFT technology. This means you can truly own your AI assistant as a unique digital asset.",
                buttonText: "Explore the Library",
                type: "left",
              },
              {
                src: "/gifs/ai-development-tools.gif",
                name: "AI Development Tools",
                description:
                  "With SkillfulAI's innovative AI creation tools, you have the power to build your own AI models. Our user-friendly interface and advanced tools make AI development accessible, whether you're a technical or non-technical user.",
                buttonText: "Search for Dev Tools",
                type: "center",
              },
              {
                src: "/gifs/ai-assistants.gif",
                name: "Modular AI Assistants",
                description:
                  "We believe in the power of customization. Our pre-made AI assistants are built around the concept of 'skills' - individual blocks of work that can be combined in countless ways. This allows you to create an AI assistant that is perfectly tailored to your needs.",
                buttonText: "Check Assistants",
                type: "right",
              },
            ].map((e, t) =>
              (0, a.jsxs)(
                j.k,
                {
                  p: { base: "2rem", lg: "1rem" },
                  mt: { base: "8rem", lg: "8rem" },
                  flexDir: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: { base: "21.68856rem", lg: "32.0625rem" },
                  height: { base: "32.57744rem", lg: "40.8125rem" },
                  borderRadius: "1.25rem",
                  border: "1px solid rgba(245, 247, 250, 0.06)",
                  background:
                    "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.00) 100%)",
                  boxShadow:
                    "0px 1px 2px 0px rgba(9, 13, 20, 0.24), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 4px 4px 0px rgba(9, 13, 20, 0.12)",
                  backdropFilter: "blur(54.36563491821289px)",
                  position: "relative",
                  children: [
                    (0, a.jsx)(c.xu, {
                      position: "absolute",
                      top: "15%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "10.5875rem",
                      height: "3.437rem",
                      borderRadius: "50%",
                      filter: "blur(27.028404235839844px)",
                      zIndex: -1,
                      bgGradient:
                        "linear-gradient(272deg, #5F2BFF 2%, #FF2091 38.53%, #FF739E 75.8%)",
                    }),
                    (0, a.jsx)(d.E, {
                      width: "25rem",
                      height: "16rem",
                      position: "absolute",
                      top: "-8.5rem",
                      src: e.src,
                      alt: e.name.toLowerCase().replace(/ /g, "-"),
                    }),
                    (0, a.jsxs)(j.k, {
                      flexDir: "column",
                      alignItems: "center",
                      pt: "5rem",
                      justifyContent: "space-around",
                      height: "100%",
                      children: [
                        (0, a.jsxs)(j.k, {
                          flexDir: "column",
                          children: [
                            (0, a.jsx)(v.x, {
                              fontSize: { base: "1.85819rem", lg: "2.75rem" },
                              fontWeight: "700",
                              textTransform: "capitalize",
                              fontFamily: "heading",
                              color: "#fff",
                              textAlign: "center",
                              children: e.name,
                            }),
                            (0, a.jsx)(v.x, {
                              color: "#CECECE",
                              textAlign: "center",
                              fontFamily: "body",
                              fontSize: { base: "0.85rem", lg: "1.25rem" },
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "140%",
                              mt: "2rem",
                              children: e.description,
                            }),
                          ],
                        }),
                        (0, a.jsx)(y.z, {
                          fontSize: { base: "1.01356rem", lg: "1.5rem" },
                          color: "#ededed",
                          borderRadius: "10px",
                          bgGradient: "linear(to-r, #FF2091 0%, #0184FD 140%)",
                          p: "1.8rem",
                          width: "100%",
                          _hover: {
                            "&::after": {
                              content: '"Coming Soon"',
                              display: "block",
                              color: "white",
                              fontWeight: "bold",
                              fontSize: { base: "1.01356rem", lg: "1.5rem" },
                              lineHeight: "3.066rem",
                            },
                            "& > p": { display: "none" },
                          },
                          children: (0, a.jsx)(v.x, {
                            fontWeight: "bold",
                            lineHeight: "3.066rem",
                            children: e.buttonText,
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                t
              )
            ),
          })
        ),
        D = (e) => {
          let { source: t } = e,
            i = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(c.xu, {
            position: "relative",
            width: i ? "300px" : "552px",
            height: i ? "250px" : "414px",
            children: [
              (0, a.jsx)(d.E, {
                position: "absolute",
                top: "23.9px",
                left: "0",
                width: i ? "300px" : "552px",
                height: i ? "250px" : "390.1px",
                objectFit: "contain",
                mixBlendMode: "lighten",
                zIndex: 1,
                alt: "",
                src: "/images/group-1171274744@2x.png",
              }),
              (0, a.jsx)(d.E, {
                position: "absolute",
                top: i ? "10px" : "0",
                left: i ? "30px" : "90px",
                width: i ? "230px" : "370px",
                height: i ? "230px" : "370px",
                objectFit: "cover",
                mixBlendMode: "screen",
                zIndex: 2,
                loading: "lazy",
                alt: "",
                src: t,
              }),
            ],
          });
        },
        A = [
          {
            name: "Accessibility",
            description:
              "Skillful AI allows people with any skill level to access powerful tailor-made AI tools that are easy to use.",
            icon: "/images/accessibility.png",
          },
          {
            name: "User Experience",
            description:
              "Start using and building your custom AI assistant in seconds on an intuitive user interface.",
            icon: "/images/user-experience.png",
          },
          {
            name: "Trust & Privacy",
            description:
              "Get an AI that enables you to own and be in control of your own data.",
            icon: "/images/trust-and-privacy.png",
          },
          {
            name: "Memory",
            description:
              "Vector storage of data via parameter-efficient fine-tuning through a unique encoder.",
            icon: "/images/memory.png",
          },
          {
            name: "Customization",
            description:
              "With the power of BUILDING BLOCKS, customize your AI to fulfill your needs, the way you want them.",
            icon: "/images/customization.png",
          },
        ];
      var H = () => {
          let e = (0, w.S)({ base: !0, lg: !1 }),
            [t, i] = (0, l.useState)(0);
          return (0, a.jsxs)(j.k, {
            mt: e ? "3.56rem" : "8.31rem",
            flexDir: "column",
            p: "1rem",
            gap: e ? "4rem" : "9.81rem",
            children: [
              (0, a.jsx)(v.x, {
                pl: e ? "none" : "9.31rem",
                pr: e ? "none" : "9.31rem",
                bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                backgroundClip: "text",
                textAlign: "center",
                fontFamily: "heading",
                fontSize: e ? "1.92119rem" : "5.625rem",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: e ? "2.09194rem" : "6.125rem",
                textTransform: "capitalize",
                children:
                  "Skillful AI: Create, deploy, and share personalized AI assistants on any device.",
              }),
              (0, a.jsxs)(j.k, {
                flexDir: { base: "column", lg: "row" },
                gap: "5rem",
                alignItems: "center",
                p: "1rem",
                children: [
                  (0, a.jsx)(j.k, {
                    direction: "column",
                    align: "center",
                    gap: "1rem",
                    textAlign: "left",
                    fontSize: e ? "1.15281rem" : "2.25rem",
                    color: "#fff",
                    fontFamily: "heading",
                    width: { base: "100%", lg: "49%" },
                    children: A.map((r, n) =>
                      (0, a.jsxs)(
                        j.k,
                        {
                          w: "100%",
                          height: e ? "4.5rem" : "8.75rem",
                          align: "center",
                          opacity: n === t ? 1 : 0.4,
                          borderRadius: "25px",
                          bgSize: "cover",
                          position: "relative",
                          bg: "rgba(255, 255, 255, 0.06)",
                          backdropFilter: "blur(8.5px)",
                          justifyContent: "space-between",
                          pl: "1rem",
                          pr: "1rem",
                          border: "1px solid rgba(245, 247, 250, 0.05)",
                          cursor: "pointer",
                          onClick: () => i(n),
                          children: [
                            (0, a.jsx)(v.x, {
                              letterSpacing: "0.08em",
                              textTransform: "capitalize",
                              fontWeight: "500",
                              ml: "4",
                              children: r.name,
                            }),
                            (0, a.jsx)(d.E, {
                              src: "/icons/highlights/arrow.svg",
                              alt: "",
                              width: "1.794rem",
                              height: "1.794rem",
                              ml: "auto",
                              mr: "4",
                            }),
                          ],
                        },
                        n
                      )
                    ),
                  }),
                  (0, a.jsxs)(j.k, {
                    direction: "column",
                    width: { base: "100%", lg: "49%" },
                    children: [
                      (0, a.jsxs)(j.k, {
                        direction: "row",
                        justify: "space-between",
                        width: "100%",
                        p: "4",
                        pt: "0",
                        pb: "0",
                        children: [
                          (0, a.jsxs)(c.xu, {
                            position: "relative",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/highlights/Vector 662.svg",
                                alt: "",
                                width: "4.875rem",
                                height: "4.75rem",
                              }),
                              (0, a.jsx)(d.E, {
                                src: "/icons/highlights/icon-park_plus.svg",
                                alt: "",
                                width: "1.063rem",
                                height: "1.063rem",
                                pos: "absolute",
                                top: "17px",
                                left: "20px",
                              }),
                            ],
                          }),
                          (0, a.jsxs)(c.xu, {
                            position: "relative",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/highlights/Vector 664.svg",
                                alt: "",
                                width: "4.813rem",
                                height: "4.688rem",
                              }),
                              (0, a.jsx)(d.E, {
                                src: "/icons/highlights/icon-park_plus.svg",
                                alt: "",
                                width: "1.063rem",
                                height: "1.063rem",
                                pos: "absolute",
                                top: "17px",
                                right: "20px",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)(j.k, {
                        direction: "column",
                        align: "center",
                        justify: "center",
                        height: "100%",
                        width: "100%",
                        textAlign: "center",
                        pl: "3rem",
                        pr: "3rem",
                        children: [
                          (0, a.jsx)(c.xu, {
                            position: "absolute",
                            width: e ? "15rem" : "25rem",
                            height: e ? "15rem" : "25rem",
                            borderRadius: "100%",
                            filter: "blur(250px)",
                            opacity: "0.25",
                            zIndex: 1,
                            bg: "#FF2091",
                          }),
                          (0, a.jsx)(c.xu, {
                            position: "absolute",
                            width: e ? "15rem" : "25rem",
                            height: e ? "15rem" : "25rem",
                            borderRadius: "100%",
                            filter: "blur(250px)",
                            opacity: "0.25",
                            zIndex: 1,
                            bg: "#0184FD",
                          }),
                          (0, a.jsx)(v.x, {
                            fontWeight: "bold",
                            fontSize: e ? "1.34581rem" : "3rem",
                            textTransform: "capitalize",
                            fontFamily: "heading",
                            color: "#fff",
                            children: A[t].name,
                          }),
                          (0, a.jsx)(D, { source: A[t].icon }),
                          (0, a.jsx)(v.x, {
                            maxW: "40.125rem",
                            fontSize: e ? "0.89569rem" : "1.5rem",
                            lineHeight: "150%",
                            width: "100%",
                            color: "#cecece",
                            children: A[t].description,
                          }),
                        ],
                      }),
                      (0, a.jsxs)(j.k, {
                        direction: "row",
                        justify: "space-between",
                        width: "100%",
                        p: "4",
                        pt: "0",
                        children: [
                          (0, a.jsxs)(c.xu, {
                            position: "relative",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/highlights/Vector 663.svg",
                                alt: "",
                                width: "4.813rem",
                                height: "4.813rem",
                                alignSelf: "flex-end",
                              }),
                              (0, a.jsx)(d.E, {
                                src: "/icons/highlights/icon-park_plus.svg",
                                alt: "",
                                width: "1.063rem",
                                height: "1.063rem",
                                pos: "absolute",
                                bottom: "17px",
                                left: "20px",
                              }),
                            ],
                          }),
                          (0, a.jsxs)(c.xu, {
                            position: "relative",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/highlights/Vector 665.svg",
                                alt: "",
                                width: "4.875rem",
                                height: "4.688rem",
                              }),
                              (0, a.jsx)(d.E, {
                                src: "/icons/highlights/icon-park_plus.svg",
                                alt: "",
                                width: "1.063rem",
                                height: "1.063rem",
                                pos: "absolute",
                                bottom: "17px",
                                right: "20px",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        R = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsx)(c.xu, {
            pt: { base: "4rem", lg: "8rem" },
            width: "100%",
            px: { base: "1rem", lg: "2rem" },
            children: (0, a.jsxs)(j.k, {
              flexDir: { base: "column-reverse", lg: "row" },
              borderRadius: "25px",
              border: "1px solid rgba(245, 247, 250, 0.05)",
              filter:
                "drop-shadow(0px 4px 4px rgba(9, 13, 20, 0.12)) drop-shadow(-2px -2px 4px rgba(224, 224, 255, 0.02)) drop-shadow(0px 1px 2px rgba(9, 13, 20, 0.24))",
              backdropFilter: "blur(54.36563491821289px)",
              bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.00) 100%)",
              p: { base: "2rem", lg: "3rem" },
              gap: "3rem",
              children: [
                (0, a.jsxs)(j.k, {
                  flexDir: "column",
                  gap: "3rem",
                  width: { base: "100%", lg: "50%" },
                  justifyContent: { base: "center", lg: "start" },
                  children: [
                    (0, a.jsx)(v.x, {
                      color: "var(--4, #FFF)",
                      fontFamily: "heading",
                      fontSize: { base: "3rem", lg: "7.5rem" },
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: { base: "3.5rem", lg: "7.8125rem" },
                      children: "The Skillful AI App",
                    }),
                    (0, a.jsx)(v.x, {
                      color: "#CECECE",
                      fontFamily: "body",
                      fontSize: { base: "1rem", lg: "1.25rem" },
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "150%",
                      children:
                        "The Future is Now. Unleash your creativity with Skillful AI. Personalize, innovate, and revolutionize the way you interact with technology. With Skillful AI, you're not just adapting to the future, you're creating it.",
                    }),
                    (0, a.jsxs)(y.z, {
                      height: { base: "3rem", lg: "72px" },
                      width: { base: "250px", lg: "350px" },
                      textAlign: "center",
                      fontSize: { base: "0.8rem", lg: "1.125rem" },
                      backgroundColor: "transparent",
                      position: "relative",
                      onClick: () => {
                        window.open("https://app.skillfulai.io/", "_blank");
                      },
                      children: [
                        (0, a.jsx)(d.E, {
                          position: "absolute",
                          height: "100%",
                          width: "75.65%",
                          top: "0%",
                          right: "24.35%",
                          bottom: "0%",
                          left: e ? "-1%" : "0%",
                          maxWidth: "100%",
                          overflow: "hidden",
                          maxHeight: "100%",
                          src: "/icons/button/Rectangle 196.svg",
                          alt: "",
                        }),
                        (0, a.jsx)(v.x, {
                          position: "absolute",
                          top: "calc(50% - 6px)",
                          left: "5.75%",
                          textTransform: "uppercase",
                          fontWeight: "500",
                          color: "gray.400",
                          children: "Launch The App",
                        }),
                        (0, a.jsx)(d.E, {
                          position: "absolute",
                          width: "2.32%",
                          top: "calc(50% - 25px)",
                          right: "97.68%",
                          left: "0%",
                          maxWidth: "100%",
                          overflow: "hidden",
                          height: "3.131rem",
                          objectFit: "contain",
                          src: "/icons/button/Vector 73.svg",
                          alt: "",
                        }),
                        (0, a.jsx)(d.E, {
                          position: "absolute",
                          height: "100%",
                          width: "50.14%",
                          top: "0%",
                          right: "0%",
                          bottom: "0%",
                          left: "49.86%",
                          maxWidth: "100%",
                          overflow: "hidden",
                          maxHeight: "100%",
                          src: "/icons/button/Vector 75.svg",
                          alt: "",
                        }),
                        (0, a.jsx)(d.E, {
                          position: "absolute",
                          width: "11.88%",
                          top: "calc(50% - 9px)",
                          right: "11.01%",
                          left: "77.1%",
                          maxWidth: "100%",
                          overflow: "hidden",
                          height: "0.563rem",
                          src: "/icons/button/Vector 78.svg",
                          alt: "",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(c.xu, {
                  width: { base: "100%", lg: "50%" },
                  position: "relative",
                  children: (0, a.jsx)(d.E, {
                    src: "/images/laptop_and_phone.png",
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }),
                }),
              ],
            }),
          });
        },
        T = i(2177);
      let _ = [
        {
          id: 0,
          name: "AI Suite",
          description:
            "Skillful AI, empowers AI agents with flexible functionalities, distinct from task-specific models. Developers in the AI Suite can create custom tools and skills, while users personalize agents with selected capabilities.",
          image: "/images/ai-suite.png",
        },
        {
          id: 1,
          name: "Marketplace",
          description: "Discover and purchase AI tools.",
          image: "/images/marketplace.png",
        },
        {
          id: 2,
          name: "AI Creator",
          description: "Create your own AI agents.",
          image: "/images/ai-creator.png",
        },
        {
          id: 3,
          name: "Wallet",
          description: "Manage your AI-related transactions.",
          image: "/images/wallet.png",
        },
      ];
      var M = () => {
          let [e, t] = (0, l.useState)(0),
            i = (0, w.S)({ base: !0, lg: !1 }),
            r = (0, w.S)({ base: !1, xl: !0 });
          return (0, a.jsxs)(j.k, {
            p: { base: "2rem", lg: "5rem" },
            position: "relative",
            width: "100%",
            height: "fit-content",
            borderBottom: "1px solid rgba(245, 247, 250, 0.05)",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsxs)(j.k, {
                width: "100%",
                flexDir: { base: "column", lg: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: i ? "2rem" : "9rem",
                children: [
                  (0, a.jsx)(j.k, {
                    justifyContent: "center",
                    width: { base: "100%", lg: "50%" },
                    position: "relative",
                    children: (0, a.jsx)(d.E, {
                      src: _[e].image,
                      objectFit: "contain",
                      width: i ? "21.0625rem" : "55rem",
                      height: i ? "23.1875rem" : "45rem",
                    }),
                  }),
                  (0, a.jsxs)(j.k, {
                    width: { base: "100%", lg: "50%" },
                    flexDir: i ? "column-reverse" : "column",
                    gap: i ? "2.86rem" : "3.62rem",
                    children: [
                      (0, a.jsxs)(j.k, {
                        gap: i ? "1rem" : "3.62rem",
                        flexDir: "column",
                        children: [
                          (0, a.jsx)(v.x, {
                            color: "var(--4, #FFF)",
                            fontFamily: "heading",
                            fontSize: i
                              ? "clamp(2.5rem, 7vw, 3.451rem)"
                              : "clamp(4rem, 7vw, 7.5rem)",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: i ? "2.01rem" : "5.975rem",
                            children: _[e].name,
                          }),
                          (0, a.jsx)(v.x, {
                            color: "#CECECE",
                            fontFamily: "body",
                            fontSize: i
                              ? "clamp(0.8rem, 2vw, 0.875rem)"
                              : "clamp(1rem, 4vw, 1.5rem)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "150%",
                            children: _[e].description,
                          }),
                        ],
                      }),
                      i
                        ? (0, a.jsx)(T.M, {
                            columns: 2,
                            spacing: "1.5rem",
                            children: _.map((i, r) =>
                              (0, a.jsxs)(
                                j.k,
                                {
                                  cursor: "pointer",
                                  position: "relative",
                                  minW: "8.91275rem",
                                  minH: "2.00119rem",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  onClick: () => t(r),
                                  children: [
                                    (0, a.jsx)(c.xu, {
                                      as: "img",
                                      src:
                                        e === r
                                          ? "/images/header-button-selected.png"
                                          : "/images/header-button.png",
                                      position: "absolute",
                                      top: "0",
                                      left: "0",
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "contain",
                                    }),
                                    (0, a.jsx)(v.x, {
                                      textTransform: "capitalize",
                                      color: "#FFFFFF",
                                      opacity: "0.7",
                                      fontFamily: "heading",
                                      fontWeight: "regular",
                                      fontSize: "clamp(0.8rem, 2vw, 1rem)",
                                      children: i.name,
                                    }),
                                  ],
                                },
                                r
                              )
                            ),
                          })
                        : r
                        ? (0, a.jsx)(j.k, {
                            direction: "row",
                            gap: "1rem",
                            children: _.map((i, r) =>
                              (0, a.jsxs)(
                                j.k,
                                {
                                  cursor: "pointer",
                                  position: "relative",
                                  minW: "9.813rem",
                                  minH: "2.063rem",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  onClick: () => t(r),
                                  children: [
                                    (0, a.jsx)(c.xu, {
                                      as: "img",
                                      src:
                                        e === r
                                          ? "/images/header-button-selected.png"
                                          : "/images/header-button.png",
                                      position: "absolute",
                                      top: "0",
                                      left: "0",
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "contain",
                                    }),
                                    (0, a.jsx)(v.x, {
                                      textTransform: "capitalize",
                                      color: "#FFFFFF",
                                      opacity: "0.7",
                                      fontFamily: "heading",
                                      fontWeight: "500",
                                      fontSize: "clamp(0.8rem, 2vw, 1rem)",
                                      children: i.name,
                                    }),
                                  ],
                                },
                                r
                              )
                            ),
                          })
                        : (0, a.jsx)(T.M, {
                            columns: 2,
                            spacing: "1.5rem",
                            children: _.map((i, r) =>
                              (0, a.jsxs)(
                                j.k,
                                {
                                  cursor: "pointer",
                                  position: "relative",
                                  minW: "9.813rem",
                                  minH: "2.063rem",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  onClick: () => t(r),
                                  children: [
                                    (0, a.jsx)(c.xu, {
                                      as: "img",
                                      src:
                                        e === r
                                          ? "/images/header-button-selected.png"
                                          : "/images/header-button.png",
                                      position: "absolute",
                                      top: "0",
                                      left: "0",
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "contain",
                                    }),
                                    (0, a.jsx)(v.x, {
                                      textTransform: "capitalize",
                                      color: "#FFFFFF",
                                      opacity: "0.7",
                                      fontFamily: "heading",
                                      fontWeight: "500",
                                      fontSize: "clamp(0.8rem, 2vw, 1rem)",
                                      children: i.name,
                                    }),
                                  ],
                                },
                                r
                              )
                            ),
                          }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        V = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            flexDir: { base: "column-reverse", lg: "row" },
            p: { base: "2rem", lg: "5rem" },
            position: "relative",
            width: "100%",
            height: "fit-content",
            alignItems: "end",
            justifyContent: "space-between",
            gap: e ? "3rem" : "9rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsxs)(j.k, {
                flexDir: "column",
                gap: e ? "1rem" : "2.55rem",
                w: { base: "100%", lg: "50%" },
                children: [
                  (0, a.jsx)(v.x, {
                    bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                    backgroundClip: "text",
                    fontFamily: "heading",
                    fontSize: e
                      ? "clamp(2.5rem, 6vw, 3.24606rem)"
                      : "clamp(4rem, 8vw, 6.875rem)",
                    fontStyle: "normal",
                    fontWeight: 700,
                    children: "Branded AI",
                  }),
                  (0, a.jsx)(v.x, {
                    color: "var(--4, #FFF)",
                    fontFamily: "heading",
                    fontSize: e
                      ? "clamp(1.25rem, 4vw, 1.4165rem)"
                      : "clamp(2.5rem, 6vw, 3rem)",
                    fontStyle: "normal",
                    fontWeight: 700,
                    children: "The possibilities are limitless",
                  }),
                  (0, a.jsx)(v.x, {
                    color: "#CECECE",
                    fontFamily: "body",
                    fontSize: e
                      ? "clamp(0.75rem, 2vw, 0.875rem)"
                      : "clamp(1rem, 3vw, 1.25rem)",
                    fontStyle: "normal",
                    fontWeight: 700,
                    children:
                      "Branded AI is more than just a technological marvel. It's a movement.",
                  }),
                  (0, a.jsx)(v.x, {
                    color: "#CECECE",
                    fontFamily: "body",
                    fontSize: e
                      ? "clamp(0.75rem, 2vw, 0.875rem)"
                      : "clamp(1rem, 3vw, 1.25rem)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    children:
                      "It champions the rights of actors, writers, and creators, giving them the tools to shape the future on their terms. As the lines between reality and digital blur, our Branded AI stands as a testament to the enduring spirit of human creativity, amplified by the power of AI.",
                  }),
                ],
              }),
              (0, a.jsx)(j.k, {
                justifyContent: "center",
                alignItems: "center",
                w: { base: "100%", lg: "50%" },
                children: (0, a.jsx)(d.E, {
                  src: "/images/branded-ai.png",
                  objectFit: "contain",
                  width: e ? "19.9375rem" : "35rem",
                  height: e ? "19.9375rem" : "45rem",
                }),
              }),
            ],
          });
        },
        B = i(2883),
        G = i(4859),
        O = i(8783),
        P = () => {
          let e = (0, w.S)({ base: !0, lg: !1 }),
            { isOpen: t, onOpen: i, onClose: r } = (0, u.q)();
          return (0, a.jsxs)(j.k, {
            flexDir: { base: "column", lg: "row" },
            borderBottom: "1px solid rgba(245, 247, 250, 0.05)",
            p: { base: "2rem", lg: "5rem" },
            position: "relative",
            width: "100%",
            height: "fit-content",
            alignItems: "center",
            justifyContent: "space-between",
            gap: e ? "1rem" : "9rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                bgImage: "url('/icons/token-background.svg')",
                bgPosition: "center",
                bgSize: "cover",
                width: e ? "358px" : "630px",
                height: e ? "368.75px" : "649px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                children: (0, a.jsx)(d.E, {
                  src: "/gifs/coin.gif",
                  objectFit: "contain",
                }),
              }),
              (0, a.jsxs)(j.k, {
                w: { base: "100%", lg: "50%" },
                flexDir: "column",
                gap: e ? "1rem" : "2.55rem",
                children: [
                  (0, a.jsx)(v.x, {
                    bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                    backgroundClip: "text",
                    fontFamily: "heading",
                    fontSize: e
                      ? "clamp(2.5rem, 6vw, 3.67094rem)"
                      : "clamp(4rem, 8vw, 6.875rem)",
                    fontStyle: "normal",
                    fontWeight: 700,
                    children: "Token",
                  }),
                  (0, a.jsx)(v.x, {
                    color: "var(--4, #FFF)",
                    fontFamily: "heading",
                    fontSize: e
                      ? "clamp(1.25rem, 4vw, 1.60188rem)"
                      : "clamp(2.5rem, 6vw, 3rem)",
                    fontStyle: "normal",
                    fontWeight: 700,
                    children:
                      "The Utility powerhouse of the Skillful AI ecosystem.",
                  }),
                  (0, a.jsxs)(c.xu, {
                    as: "span",
                    children: [
                      (0, a.jsxs)(v.x, {
                        as: "span",
                        color: "#CECECE",
                        fontFamily: "body",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.875rem)"
                          : "clamp(1rem, 3vw, 1.25rem)",
                        fontStyle: "normal",
                        fontWeight: 700,
                        children: [
                          "Access AI Creator tools, buy and sell on the marketplace, cover all your fees and subscriptions with ",
                          " ",
                        ],
                      }),
                      (0, a.jsx)(v.x, {
                        as: "span",
                        color: "#FF2091",
                        fontFamily: "body",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.875rem)"
                          : "clamp(1rem, 3vw, 1.25rem)",
                        fontStyle: "normal",
                        fontWeight: 700,
                        children: "$SKAI",
                      }),
                      (0, a.jsx)(v.x, {
                        as: "span",
                        color: "#CECECE",
                        fontFamily: "body",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.875rem)"
                          : "clamp(1rem, 3vw, 1.25rem)",
                        fontStyle: "normal",
                        fontWeight: 700,
                        children: ".",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(j.k, {
                    gap: "3rem",
                    flexDir: "column",
                    alignItems: { base: "center", lg: "start" },
                    children: [
                      (0, a.jsxs)(j.k, {
                        gap: "1rem",
                        alignItems: "center",
                        flexDir: { base: "column", lg: "row" },
                        children: [
                          (0, a.jsx)(v.x, {
                            bgGradient:
                              "linear(to-r, #FF2091 30%, #0184FD 140%)",
                            backgroundClip: "text",
                            fontFamily: "heading",
                            fontSize: e
                              ? "clamp(0.5rem, 2vw, 0.77169rem)"
                              : "clamp(0.8rem, 2vw, 1rem)",
                            fontStyle: "normal",
                            fontWeight: "500",
                            letterSpacing: "0.08rem",
                            children: "See On",
                          }),
                          (0, a.jsx)(B.r, {
                            href: "https://www.coingecko.com/en/coins/skai",
                            target: "_blank",
                            children: (0, a.jsx)(d.E, {
                              src: "/icons/coingecko.svg",
                              objectFit: "contain",
                              cursor: "pointer",
                            }),
                          }),
                          (0, a.jsx)(B.r, {
                            href: "https://coinmarketcap.com/currencies/skillful-ai/",
                            target: "_blank",
                            children: (0, a.jsx)(d.E, {
                              src: "/icons/coinmarketcap.svg",
                              objectFit: "contain",
                              cursor: "pointer",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)(y.z, {
                        height: { base: "3rem", lg: "72px" },
                        width: { base: "250px", lg: "350px" },
                        textAlign: "center",
                        fontSize: {
                          base: "clamp(0.75rem, 2vw, 0.8rem)",
                          lg: "clamp(1rem, 2vw, 1.125rem)",
                        },
                        backgroundColor: "transparent",
                        position: "relative",
                        onClick: i,
                        children: [
                          (0, a.jsx)(d.E, {
                            position: "absolute",
                            height: "100%",
                            width: "75.65%",
                            top: "0%",
                            right: "24.35%",
                            bottom: "0%",
                            left: e ? "-1%" : "0",
                            maxWidth: "100%",
                            overflow: "hidden",
                            maxHeight: "100%",
                            src: "/icons/button/Rectangle 196.svg",
                            alt: "",
                          }),
                          (0, a.jsx)(v.x, {
                            position: "absolute",
                            top: "calc(50% - 6px)",
                            left: "12.75%",
                            textTransform: "uppercase",
                            fontWeight: "500",
                            color: "gray.400",
                            children: "Buy Token",
                          }),
                          (0, a.jsx)(d.E, {
                            position: "absolute",
                            width: "2.32%",
                            top: "calc(50% - 25px)",
                            right: "97.68%",
                            left: "0%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            height: "3.131rem",
                            objectFit: "contain",
                            src: "/icons/button/Vector 73.svg",
                            alt: "",
                          }),
                          (0, a.jsx)(d.E, {
                            position: "absolute",
                            height: "100%",
                            width: "50.14%",
                            top: "0%",
                            right: "0%",
                            bottom: "0%",
                            left: "49.86%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            maxHeight: "100%",
                            src: "/icons/button/Vector 75.svg",
                            alt: "",
                          }),
                          (0, a.jsx)(d.E, {
                            position: "absolute",
                            width: "11.88%",
                            top: "calc(50% - 9px)",
                            right: "11.01%",
                            left: "77.1%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            height: "0.563rem",
                            src: "/icons/button/Vector 78.svg",
                            alt: "",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(k.u_, {
                isOpen: t,
                onClose: r,
                isCentered: !0,
                size: "sm",
                children: [
                  (0, a.jsx)(S.Z, {}),
                  (0, a.jsxs)(F.h, {
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(245, 247, 250, 0.06)",
                    background:
                      "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.00) 100%)",
                    boxShadow:
                      "0px 1px 2px 0px rgba(9, 13, 20, 0.24), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 4px 4px 0px rgba(9, 13, 20, 0.12)",
                    backdropFilter: "blur(54.36563491821289px)",
                    children: [
                      (0, a.jsx)(G.x, {
                        fontFamily: "heading",
                        fontSize: "3rem",
                        fontWeight: "700",
                        lineHeight: "3.375rem",
                        display: "flex",
                        justifyContent: "center",
                        pb: "0",
                        children: "Exchanges",
                      }),
                      (0, a.jsx)(I.o, {}),
                      (0, a.jsxs)(E.f, {
                        pr: "3rem",
                        pl: "3rem",
                        children: [
                          (0, a.jsx)(v.x, {
                            color: "rgba(255, 255, 255, 0.60)",
                            textAlign: "center",
                            fontFamily: "Poppins",
                            fontSize: "0.75rem",
                            fontWeight: "400",
                            lineHeight: "1rem",
                            mb: "2rem",
                            children:
                              "Access AI Creator tools, buy and sell on the marketplace, cover all your fees and subscriptions with $SKAI.",
                          }),
                          (0, a.jsxs)(O.g, {
                            spacing: 4,
                            children: [
                              (0, a.jsx)(c.xu, {
                                as: "button",
                                width: "100%",
                                borderRadius: "0.625rem",
                                border: "1px solid #FF2091",
                                background: "rgba(255, 255, 255, 0.04)",
                                display: "flex",
                                height: "4.5rem",
                                padding: "1.5rem 3.75rem",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                fontFamily: "heading",
                                fontSize: "1.25rem",
                                fontWeight: "600",
                                _hover: { bg: "rgba(255, 255, 255, 0.1)" },
                                onClick: () =>
                                  window.open(
                                    "https://www.gate.io/trade/SKAI_USDT",
                                    "_blank"
                                  ),
                                children: (0, a.jsxs)(j.k, {
                                  gap: "1rem",
                                  flexDir: "row-reverse",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  children: [
                                    (0, a.jsx)(v.x, { children: "Gate.io" }),
                                    (0, a.jsx)(d.E, {
                                      src: "/icons/gate.svg",
                                      alt: "gateio",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)(c.xu, {
                                as: "button",
                                width: "100%",
                                borderRadius: "0.625rem",
                                border: "1px solid #FF2091",
                                background: "rgba(255, 255, 255, 0.04)",
                                display: "flex",
                                height: "4.5rem",
                                padding: "1.5rem 3.75rem",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                fontFamily: "heading",
                                fontSize: "1.25rem",
                                fontWeight: "600",
                                _hover: { bg: "rgba(255, 255, 255, 0.1)" },
                                onClick: () =>
                                  window.open(
                                    "https://app.uniswap.org/explore/tokens/ethereum/0xcf078da6e85389de507ceede0e3d217e457b9d49",
                                    "_blank"
                                  ),
                                children: (0, a.jsxs)(j.k, {
                                  gap: "1rem",
                                  flexDir: "row-reverse",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  children: [
                                    (0, a.jsx)(v.x, { children: "Uniswap" }),
                                    (0, a.jsx)(d.E, {
                                      src: "/icons/uniswap.svg",
                                      alt: "uniswap",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)(c.xu, {
                                as: "button",
                                width: "100%",
                                borderRadius: "0.625rem",
                                border: "1px solid #FF2091",
                                background: "rgba(255, 255, 255, 0.04)",
                                display: "flex",
                                height: "4.5rem",
                                padding: "1.5rem 3.75rem",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                fontFamily: "heading",
                                fontSize: "1.25rem",
                                fontWeight: "600",
                                _hover: { bg: "rgba(255, 255, 255, 0.1)" },
                                onClick: () =>
                                  window.open(
                                    "https://www.mexc.com/exchange/SKAI_USDT",
                                    "_blank"
                                  ),
                                children: (0, a.jsxs)(j.k, {
                                  gap: "1rem",
                                  flexDir: "row-reverse",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  children: [
                                    (0, a.jsx)(v.x, { children: "Mexc" }),
                                    (0, a.jsx)(d.E, {
                                      src: "/icons/mexc.svg",
                                      alt: "uniswap",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      let L = (e) => {
          let { label: t, percentage: i, color: r, maxPercentage: n } = e,
            o = (0, w.S)({ base: !0, lg: !1 }),
            l = (parseFloat(i) / n) * 100;
          return (0, a.jsx)(j.k, {
            bg: "rgba(255, 255, 255, 0.06)",
            borderRadius: "md",
            alignItems: "end",
            justifyContent: "start",
            position: "relative",
            minH: o ? "4rem" : "13rem",
            minW: o ? "9rem" : "4rem",
            h: o ? "4rem" : "".concat(6 * l, "px"),
            w: o ? "".concat(l, "%") : "4rem",
            children: (0, a.jsxs)(j.k, {
              width: "4rem",
              height: "4rem",
              position: "absolute",
              transform: o ? "none" : "rotate(-90deg)",
              alignItems: "center",
              p: "1rem",
              children: [
                (0, a.jsx)(v.x, {
                  fontFamily: "body",
                  fontSize: o
                    ? "clamp(1rem, 2.5vw, 1.21913rem)"
                    : "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: "900",
                  color: r,
                  "leading-trim": "both",
                  "text-edge": "cap",
                  whiteSpace: "break-spaces",
                  children: i,
                }),
                (0, a.jsx)(v.x, {
                  ml: "0.5rem",
                  mr: "0.5rem",
                  fontFamily: "body",
                  fontSize: o
                    ? "clamp(0.7rem, 1.5vw, 0.77188rem)"
                    : "clamp(0.8rem, 2vw, 0.9rem)",
                  fontWeight: "700",
                  color: "#CECECE",
                  letterSpacing: "0.05625rem",
                  "leading-trim": "both",
                  "text-edge": "cap",
                  whiteSpace: "break-spaces",
                  children: t,
                }),
              ],
            }),
          });
        },
        U = (e) => Math.max(...e.map((e) => parseFloat(e.percentage)));
      var N = () => {
          let e = [
              { color: "#B0ACEB", label: "SALE", percentage: "26%" },
              {
                color: "#6060F2",
                label: "COMMUNITY AND USERS INCENTIVES",
                percentage: "15%",
              },
              { color: "#FBB315", label: "ADVISORS", percentage: "5%" },
              { color: "#BE04FF", label: "RESERVE", percentage: "10%" },
              { color: "#9D4F9D", label: "MARKETING", percentage: "4%" },
              {
                color: "#F9F",
                label: "ECOSYSTEM DEVELOPMENT",
                percentage: "25%",
              },
              { color: "#F05F47", label: "TEAM", percentage: "15%" },
            ],
            t = U(e),
            i = e.sort(
              (e, t) => parseFloat(t.percentage) - parseFloat(e.percentage)
            ),
            r = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            borderBottom: "1px solid rgba(245, 247, 250, 0.05)",
            p: { base: "2rem", lg: "5rem" },
            position: "relative",
            width: "100%",
            height: "fit-content",
            alignItems: "center",
            justifyContent: "space-between",
            gap: r ? "2rem" : "9rem",
            flexDirection: r ? "column" : "row",
            overflowX: "auto",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsxs)(j.k, {
                flexDir: "column",
                gap: "1rem",
                w: { base: "100%", lg: "auto" },
                children: [
                  (0, a.jsx)(v.x, {
                    bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                    backgroundClip: "text",
                    fontFamily: "heading",
                    fontSize: r
                      ? "clamp(2.5rem, 6vw, 3.82588rem)"
                      : "clamp(4rem, 8vw, 6.875rem)",
                    fontStyle: "normal",
                    fontWeight: 700,
                    children: "Tokenomics",
                  }),
                  (0, a.jsxs)(c.xu, {
                    as: "span",
                    children: [
                      (0, a.jsxs)(v.x, {
                        as: "span",
                        color: "#CECECE",
                        fontFamily: "body",
                        fontSize: r
                          ? "clamp(0.75rem, 2vw, 0.875rem)"
                          : "clamp(1rem, 3vw, 1.25rem)",
                        fontStyle: "normal",
                        fontWeight: 700,
                        children: [
                          "Discover the strategic allocation of ",
                          " ",
                        ],
                      }),
                      (0, a.jsxs)(v.x, {
                        as: "span",
                        color: "#FF2091",
                        fontFamily: "body",
                        fontSize: r
                          ? "clamp(0.75rem, 2vw, 0.875rem)"
                          : "clamp(1rem, 3vw, 1.25rem)",
                        fontStyle: "normal",
                        fontWeight: 700,
                        children: ["$SKAI ", " "],
                      }),
                      (0, a.jsx)(v.x, {
                        as: "span",
                        color: "#CECECE",
                        fontFamily: "body",
                        fontSize: r
                          ? "clamp(0.75rem, 2vw, 0.875rem)"
                          : "clamp(1rem, 3vw, 1.25rem)",
                        fontStyle: "normal",
                        fontWeight: 700,
                        children:
                          "designed to fuel innovation and reward our community.",
                      }),
                    ],
                  }),
                  !r &&
                    (0, a.jsxs)(j.k, {
                      gap: "8rem",
                      mt: "5.12rem",
                      children: [
                        (0, a.jsx)(j.k, {
                          flexDir: "column",
                          gap: "1.5rem",
                          children: i
                            .slice(0, 4)
                            .map((e, t) =>
                              (0, a.jsxs)(
                                j.k,
                                {
                                  alignItems: "center",
                                  gap: "0.5rem",
                                  children: [
                                    (0, a.jsx)(c.xu, {
                                      p: "0.5rem",
                                      width: "1rem",
                                      height: "1rem",
                                      backgroundColor: e.color,
                                      borderRadius: "50%",
                                    }),
                                    (0, a.jsx)(v.x, {
                                      color: "#CECECE",
                                      fontFamily: "body",
                                      fontSize:
                                        "clamp(0.7rem, 1.5vw, 0.84656rem)",
                                      fontStyle: "normal",
                                      fontWeight: 500,
                                      children: e.label,
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                        }),
                        (0, a.jsx)(j.k, {
                          flexDir: "column",
                          gap: "1.5rem",
                          children: i
                            .slice(4)
                            .map((e, t) =>
                              (0, a.jsxs)(
                                j.k,
                                {
                                  alignItems: "center",
                                  gap: "0.5rem",
                                  children: [
                                    (0, a.jsx)(c.xu, {
                                      width: "1rem",
                                      height: "1rem",
                                      backgroundColor: e.color,
                                      borderRadius: "50%",
                                    }),
                                    (0, a.jsx)(v.x, {
                                      color: "#CECECE",
                                      fontFamily: "body",
                                      fontSize:
                                        "clamp(0.7rem, 1.5vw, 0.84656rem)",
                                      fontStyle: "normal",
                                      fontWeight: 500,
                                      children: e.label,
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                        }),
                      ],
                    }),
                ],
              }),
              (0, a.jsx)(j.k, {
                width: { base: "100%", lg: "auto" },
                gap: "1.5rem",
                justifyContent: "end",
                alignItems: "end",
                flexDirection: r ? "column" : "row",
                children: i.map((e) =>
                  (0, a.jsx)(
                    L,
                    {
                      label: e.label,
                      percentage: e.percentage,
                      color: e.color,
                      maxPercentage: t,
                    },
                    e.label
                  )
                ),
              }),
            ],
          });
        },
        K = i(8371);
      let Z = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            height: "100%",
            width: "100%",
            border: "1px solid rgba(245, 247, 250, 0.06)",
            borderRadius: "1.25rem",
            bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.00) 100%);",
            boxShadow:
              "0px 1px 2px 0px rgba(9, 13, 20, 0.24), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 4px 4px 0px rgba(9, 13, 20, 0.12)",
            backdropFilter: "blur(54.36563491821289px)",
            padding: "2rem",
            flexDir: "column",
            gap: "1rem",
            children: [
              (0, a.jsx)(v.x, {
                color: "white",
                fontFamily: "heading",
                fontSize: e
                  ? "clamp(2.5rem, 6vw, 3.66331rem)"
                  : "clamp(3rem, 8vw, 4.5rem)",
                fontStyle: "normal",
                fontWeight: "700",
                children: "Technology",
              }),
              (0, a.jsx)(v.x, {
                fontFamily: "heading",
                fontSize: e
                  ? "clamp(1rem, 4vw, 1.07075rem)"
                  : "clamp(1.5rem, 6vw, 2.25rem)",
                fontStyle: "normal",
                fontWeight: "700",
                bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                backgroundClip: "text",
                children: "The next generation of AI creator tools",
              }),
            ],
          });
        },
        q = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            height: "100%",
            width: "100%",
            border: "1px solid rgba(245, 247, 250, 0.06)",
            borderRadius: "1.25rem",
            bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.00) 100%);",
            boxShadow:
              "0px 1px 2px 0px rgba(9, 13, 20, 0.24), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 4px 4px 0px rgba(9, 13, 20, 0.12)",
            backdropFilter: "blur(54.36563491821289px)",
            padding: "2rem",
            flexDir: "column",
            gap: "2rem",
            children: [
              (0, a.jsxs)(j.k, {
                width: "100%",
                gap: "2rem",
                flexDirection: e ? "column" : "row",
                children: [
                  (0, a.jsx)(v.x, {
                    color: "white",
                    fontFamily: "heading",
                    fontSize: e
                      ? "clamp(1.75rem, 6vw, 2.1rem)"
                      : "clamp(2.5rem, 8vw, 3rem)",
                    fontWeight: "700",
                    children: "AI Providers",
                  }),
                  (0, a.jsx)(v.x, {
                    color: "#CECECE",
                    fontFamily: "body",
                    fontSize: e
                      ? "clamp(0.75rem, 2vw, 0.8125rem)"
                      : "clamp(1rem, 4vw, 1.125rem)",
                    fontWeight: "500",
                    children:
                      "Tailor AI solutions to unique needs, ensuring a perfect fit for business or personal use with constantly evolving integrations to meet ever-changing requirements.",
                  }),
                ],
              }),
              (0, a.jsxs)(j.k, {
                gap: "1rem",
                flexWrap: "wrap",
                children: [
                  (0, a.jsx)(d.E, {
                    w: e ? "6.1175rem" : "10.55763rem",
                    height: e ? "1.25038rem" : "2.15794rem",
                    src: "./icons/brands/SkillfulAI.svg",
                    alt: "",
                  }),
                  (0, a.jsx)(d.E, {
                    w: e ? "6.1175rem" : "10.55763rem",
                    height: e ? "1.25038rem" : "2.15794rem",
                    src: "./icons/brands/LlaMa2.svg",
                    alt: "",
                  }),
                  (0, a.jsx)(d.E, {
                    w: e ? "6.1175rem" : "10.55763rem",
                    height: e ? "1.25038rem" : "2.15794rem",
                    src: "./icons/brands/HuggingFace.svg",
                    alt: "",
                  }),
                  (0, a.jsx)(d.E, {
                    w: e ? "6.1175rem" : "10.55763rem",
                    height: e ? "1.25038rem" : "2.15794rem",
                    src: "./icons/brands/OpenAI.svg",
                    alt: "",
                  }),
                  (0, a.jsx)(d.E, {
                    w: e ? "6.1175rem" : "10.55763rem",
                    height: e ? "1.25038rem" : "2.15794rem",
                    src: "./icons/brands/StabilityAi.svg",
                    alt: "",
                  }),
                ],
              }),
            ],
          });
        },
        Q = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            height: "100%",
            width: "100%",
            borderRadius: "1.25rem",
            position: "relative",
            overflow: "hidden",
            bg: "#D9D9D9",
            padding: "2rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                bgGradient: "#D9D9D9",
                zIndex: "0",
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                bgGradient:
                  "linear-gradient(95deg, #409BC2 0.73%, #ACD8EB 92.39%)",
                zIndex: "1",
              }),
              (0, a.jsx)(d.E, {
                src: "/images/developer-interface.png",
                alt: "Developer Interface",
                objectFit: "cover",
                height: "100%",
                width: "100%",
                position: "absolute",
                mixBlendMode: "soft-light",
                top: "0",
                left: "0",
                zIndex: "2",
              }),
              (0, a.jsxs)(j.k, {
                width: "100%",
                gap: "1rem",
                zIndex: "4",
                flexDir: "column",
                children: [
                  (0, a.jsxs)(j.k, {
                    width: "100%",
                    gap: "1rem",
                    zIndex: "4",
                    flexDir: "column",
                    children: [
                      (0, a.jsx)(v.x, {
                        color: "white",
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(1.75rem, 6vw, 2.1rem)"
                          : "clamp(2.5rem, 8vw, 3rem)",
                        fontWeight: "700",
                        children: "Developer Interface",
                      }),
                      (0, a.jsx)(v.x, {
                        color: "white",
                        fontFamily: "body",
                        fontSize: e
                          ? "clamp(0.875rem, 4vw, 0.9625rem)"
                          : "clamp(1rem, 6vw, 1.125rem)",
                        fontWeight: "500",
                        children: "Empowering innovation for Developers",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(j.k, {
                    width: "100%",
                    flexDir: "column",
                    gap: "1rem",
                    children: [
                      (0, a.jsxs)(K.Vp, {
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        bg: "linear-gradient(271deg, rgba(64, 155, 194, 0.50) 0.76%, rgba(172, 216, 235, 0.50) 99.24%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/di-widgets.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, { children: "Widgets" }),
                        ],
                      }),
                      (0, a.jsxs)(K.Vp, {
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        bg: "linear-gradient(271deg, rgba(64, 155, 194, 0.50) 0.76%, rgba(172, 216, 235, 0.50) 99.24%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/public-api.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, { children: "Public API" }),
                        ],
                      }),
                      (0, a.jsxs)(K.Vp, {
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        bg: "linear-gradient(271deg, rgba(64, 155, 194, 0.50) 0.76%, rgba(172, 216, 235, 0.50) 99.24%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/web3.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, {
                            children: "Web3/Blockchain Integration",
                          }),
                        ],
                      }),
                      (0, a.jsxs)(K.Vp, {
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        bg: "linear-gradient(271deg, rgba(64, 155, 194, 0.50) 0.76%, rgba(172, 216, 235, 0.50) 99.24%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/ai-tools.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, { children: "AI Creation Tools" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        X = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            height: "100%",
            width: "100%",
            borderRadius: "1.25rem",
            position: "relative",
            overflow: "hidden",
            padding: "2rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                bgGradient: "#D9D9D9",
                zIndex: "0",
              }),
              (0, a.jsx)(d.E, {
                src: "/images/user-interface.png",
                alt: "User Interface",
                objectFit: "cover",
                height: "100%",
                width: "100%",
                mixBlendMode: "screen",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "2",
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                bgGradient:
                  "linear-gradient(95deg, rgba(96, 96, 242, 0.80) 0.73%, rgba(176, 172, 235, 0.80) 92.39%)",
                zIndex: "1",
                backdropFilter: "blur(2.5px)",
              }),
              (0, a.jsxs)(j.k, {
                width: "100%",
                gap: "1rem",
                zIndex: "4",
                flexDir: e ? "column" : "row",
                children: [
                  (0, a.jsxs)(j.k, {
                    width: e ? "100%" : "50%",
                    gap: "1rem",
                    zIndex: "4",
                    flexDir: "column",
                    children: [
                      (0, a.jsx)(v.x, {
                        color: "white",
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(1.75rem, 6vw, 2.1rem)"
                          : "clamp(2.5rem, 8vw, 3rem)",
                        fontWeight: "700",
                        children: "User Interface",
                      }),
                      (0, a.jsx)(v.x, {
                        color: "white",
                        fontFamily: "body",
                        fontSize: e
                          ? "clamp(0.75rem, 4vw, 0.875rem)"
                          : "clamp(1rem, 6vw, 1.125rem)",
                        fontWeight: "500",
                        children: "User Friendly & Optimized for productivity",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(j.k, {
                    width: e ? "100%" : "50%",
                    flexDir: "column",
                    justifyContent: e ? "start" : "center",
                    alignItems: e ? "start" : "center",
                    gap: "1rem",
                    children: [
                      (0, a.jsxs)(K.Vp, {
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        bg: "linear-gradient(95deg, rgba(96, 96, 242, 0.50) 0.73%, rgba(176, 172, 235, 0.50) 92.39%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/widgets.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, { children: "Widgets" }),
                        ],
                      }),
                      (0, a.jsxs)(j.k, {
                        flexWrap: e ? "unset" : "wrap",
                        flexDir: e ? "column" : "row",
                        justifyContent: e ? "start" : "center",
                        alignItems: e ? "start" : "center",
                        gap: "1rem",
                        children: [
                          (0, a.jsxs)(K.Vp, {
                            fontFamily: "heading",
                            fontSize: e
                              ? "clamp(0.75rem, 2vw, 0.85538rem)"
                              : "clamp(1rem, 4vw, 1.375rem)",
                            color: "white",
                            minW: "7.69819rem",
                            height: "3.75rem",
                            width: "fit-content",
                            bg: "linear-gradient(95deg, rgba(96, 96, 242, 0.50) 0.73%, rgba(176, 172, 235, 0.50) 92.39%)",
                            borderRadius: "full",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/technology/dashboard.svg",
                                ml: -1,
                                mr: 2,
                              }),
                              (0, a.jsx)(K.Sn, { children: "Dashboard" }),
                            ],
                          }),
                          (0, a.jsxs)(K.Vp, {
                            fontFamily: "heading",
                            fontSize: e
                              ? "clamp(0.75rem, 2vw, 0.85538rem)"
                              : "clamp(1rem, 4vw, 1.375rem)",
                            color: "white",
                            minW: "7.69819rem",
                            height: "3.75rem",
                            width: "fit-content",
                            bg: "linear-gradient(95deg, rgba(96, 96, 242, 0.50) 0.73%, rgba(176, 172, 235, 0.50) 92.39%)",
                            borderRadius: "full",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/technology/marketplace.svg",
                                ml: -1,
                                mr: 2,
                              }),
                              (0, a.jsx)(K.Sn, { children: "Marketplace" }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)(K.Vp, {
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        bg: "linear-gradient(95deg, rgba(96, 96, 242, 0.50) 0.73%, rgba(176, 172, 235, 0.50) 92.39%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/analytics.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, {
                            children: "Analytics and Reports",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        J = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            height: e ? "auto" : "21.625rem",
            width: "100%",
            borderRadius: "1.25rem",
            position: "relative",
            overflow: "hidden",
            padding: "2rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                bgGradient: "#D9D9D9",
                zIndex: "0",
              }),
              (0, a.jsx)(d.E, {
                src: "/images/personal-models.png",
                alt: "User Interface",
                objectFit: "cover",
                height: "100%",
                width: "100%",
                mixBlendMode: "overlay",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "2",
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                bgGradient:
                  "linear-gradient(95deg, #F27A60 0.73%, #EBD2AC 92.39%)",
                zIndex: "1",
              }),
              (0, a.jsxs)(j.k, {
                width: "100%",
                gap: "1rem",
                zIndex: "4",
                flexDir: "column",
                children: [
                  (0, a.jsxs)(j.k, {
                    width: "100%",
                    gap: "1rem",
                    zIndex: "4",
                    flexDir: "column",
                    children: [
                      (0, a.jsx)(v.x, {
                        color: "white",
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(1.75rem, 6vw, 2.1rem)"
                          : "clamp(2.5rem, 8vw, 3rem)",
                        fontWeight: "700",
                        children: "Personal Models",
                      }),
                      (0, a.jsx)(v.x, {
                        color: "white",
                        fontFamily: "body",
                        fontSize: e
                          ? "clamp(0.75rem, 4vw, 0.875rem)"
                          : "clamp(1rem, 6vw, 1.125rem)",
                        fontWeight: "500",
                        children: "Next level AI customization",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(j.k, {
                    width: "100%",
                    flexDir: "column",
                    gap: "1rem",
                    children: [
                      (0, a.jsxs)(j.k, {
                        flexWrap: "wrap",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "1rem",
                        children: [
                          (0, a.jsxs)(K.Vp, {
                            fontFamily: "heading",
                            fontSize: e
                              ? "clamp(0.75rem, 2vw, 0.85538rem)"
                              : "clamp(1rem, 4vw, 1.375rem)",
                            color: "white",
                            minW: "7.69819rem",
                            height: "3.75rem",
                            width: "fit-content",
                            bg: "linear-gradient(95deg, #F27A60 0.73%, #EBD2AC 92.39%)",
                            borderRadius: "full",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/technology/information-presentation.svg",
                                ml: -1,
                                mr: 2,
                              }),
                              (0, a.jsx)(K.Sn, {
                                children: "Information Presentation",
                              }),
                            ],
                          }),
                          (0, a.jsxs)(K.Vp, {
                            fontFamily: "heading",
                            fontSize: e
                              ? "clamp(0.75rem, 2vw, 0.85538rem)"
                              : "clamp(1rem, 4vw, 1.375rem)",
                            color: "white",
                            minW: "7.69819rem",
                            height: "3.75rem",
                            width: "fit-content",
                            bg: "linear-gradient(95deg, #F27A60 0.73%, #EBD2AC 92.39%)",
                            borderRadius: "full",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/technology/preferences.svg",
                                ml: -1,
                                mr: 2,
                              }),
                              (0, a.jsx)(K.Sn, { children: "Preferences" }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)(j.k, {
                        flexWrap: e ? "unset" : "wrap",
                        flexDir: e ? "column" : "row",
                        justifyContent: "start",
                        alignItems: e ? "start" : "center",
                        gap: "1rem",
                        children: [
                          (0, a.jsxs)(K.Vp, {
                            fontFamily: "heading",
                            fontSize: e
                              ? "clamp(0.75rem, 2vw, 0.85538rem)"
                              : "clamp(1rem, 4vw, 1.375rem)",
                            color: "white",
                            minW: "7.69819rem",
                            height: "3.75rem",
                            width: "fit-content",
                            bg: "linear-gradient(95deg, #F27A60 0.73%, #EBD2AC 92.39%)",
                            borderRadius: "full",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/technology/perspective.svg",
                                ml: -1,
                                mr: 2,
                              }),
                              (0, a.jsx)(K.Sn, { children: "Perspectives" }),
                            ],
                          }),
                          (0, a.jsxs)(K.Vp, {
                            fontFamily: "heading",
                            fontSize: e
                              ? "clamp(0.75rem, 2vw, 0.85538rem)"
                              : "clamp(1rem, 4vw, 1.375rem)",
                            color: "white",
                            minW: "7.69819rem",
                            height: "3.75rem",
                            width: "fit-content",
                            bg: "linear-gradient(95deg, #F27A60 0.73%, #EBD2AC 92.39%)",
                            borderRadius: "full",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/technology/interactions.svg",
                                ml: -1,
                                mr: 2,
                              }),
                              (0, a.jsx)(K.Sn, { children: "Interactions" }),
                            ],
                          }),
                          (0, a.jsxs)(K.Vp, {
                            fontFamily: "heading",
                            fontSize: e
                              ? "clamp(0.75rem, 2vw, 0.85538rem)"
                              : "clamp(1rem, 4vw, 1.375rem)",
                            color: "white",
                            minW: "7.69819rem",
                            height: "3.75rem",
                            width: "fit-content",
                            bg: "linear-gradient(95deg, #F27A60 0.73%, #EBD2AC 92.39%)",
                            borderRadius: "full",
                            children: [
                              (0, a.jsx)(d.E, {
                                src: "/icons/technology/data-source.svg",
                                ml: -1,
                                mr: 2,
                              }),
                              (0, a.jsx)(K.Sn, { children: "Data Source" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Y = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            height: "100%",
            width: "100%",
            borderRadius: "1.25rem",
            position: "relative",
            overflow: "hidden",
            padding: "2rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                bg: "#D9D9D9",
                zIndex: "0",
              }),
              (0, a.jsx)(d.E, {
                src: "/images/training-models.png",
                alt: "User Interface",
                objectFit: "cover",
                height: "100%",
                width: "100%",
                mixBlendMode: "darken",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "2",
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                bgGradient:
                  "linear-gradient(276deg, #F26083 -13.37%, #EFB2D7 105.32%)",
                zIndex: "1",
              }),
              (0, a.jsxs)(j.k, {
                width: "100%",
                gap: "1rem",
                zIndex: "4",
                flexDirection: "column",
                children: [
                  (0, a.jsxs)(j.k, {
                    width: "100%",
                    gap: "1rem",
                    flexDirection: "column",
                    children: [
                      (0, a.jsx)(v.x, {
                        color: "white",
                        fontFamily: "heading",
                        fontSize: e
                          ? "clamp(1.75rem, 6vw, 2.1rem)"
                          : "clamp(2.5rem, 8vw, 3rem)",
                        fontWeight: "700",
                        children: "Training Models",
                      }),
                      (0, a.jsx)(v.x, {
                        color: "white",
                        fontFamily: "body",
                        fontSize: e
                          ? "clamp(0.75rem, 4vw, 0.875rem)"
                          : "clamp(1rem, 6vw, 1.125rem)",
                        fontWeight: "500",
                        children: "Specialized domain specific development",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(j.k, {
                    width: "100%",
                    flexDirection: "column",
                    gap: "1rem",
                    children: [
                      (0, a.jsxs)(K.Vp, {
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        bgGradient:
                          "linear-gradient(276deg, rgba(242, 96, 131, 0.50) -13.37%, rgba(239, 178, 215, 0.50) 105.32%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/finance.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, { children: "Finance" }),
                        ],
                      }),
                      (0, a.jsxs)(K.Vp, {
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        bgGradient:
                          "linear-gradient(276deg, rgba(242, 96, 131, 0.50) -13.37%, rgba(239, 178, 215, 0.50) 105.32%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/tm-marketing.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, { children: "Public API" }),
                        ],
                      }),
                      (0, a.jsxs)(K.Vp, {
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        bgGradient:
                          "linear-gradient(276deg, rgba(242, 96, 131, 0.50) -13.37%, rgba(239, 178, 215, 0.50) 105.32%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/blockchain.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, { children: "Blockchain Data" }),
                        ],
                      }),
                      (0, a.jsxs)(K.Vp, {
                        color: "white",
                        minW: "7.69819rem",
                        height: "3.75rem",
                        width: "fit-content",
                        fontSize: e
                          ? "clamp(0.75rem, 2vw, 0.85538rem)"
                          : "clamp(1rem, 4vw, 1.375rem)",
                        bgGradient:
                          "linear-gradient(276deg, rgba(242, 96, 131, 0.50) -13.37%, rgba(239, 178, 215, 0.50) 105.32%)",
                        borderRadius: "full",
                        children: [
                          (0, a.jsx)(d.E, {
                            src: "/icons/technology/cooking.svg",
                            ml: -1,
                            mr: 2,
                          }),
                          (0, a.jsx)(K.Sn, { children: "Cooking / Nutrition" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var $ = () => {
        let e = (0, w.S)({ base: !0, lg: !1 });
        return (0, a.jsx)(c.xu, {
          p: "1rem",
          pt: "4rem",
          pb: "4rem",
          borderBottom: "1px solid rgba(245, 247, 250, 0.05)",
          children: e
            ? (0, a.jsxs)(j.k, {
                direction: "column",
                gap: 4,
                position: "relative",
                children: [
                  (0, a.jsx)(c.xu, { children: (0, a.jsx)(Z, {}) }),
                  (0, a.jsx)(c.xu, { children: (0, a.jsx)(X, {}) }),
                  (0, a.jsx)(c.xu, { children: (0, a.jsx)(Q, {}) }),
                  (0, a.jsx)(c.xu, { children: (0, a.jsx)(J, {}) }),
                  (0, a.jsx)(c.xu, { children: (0, a.jsx)(Y, {}) }),
                  (0, a.jsx)(c.xu, { children: (0, a.jsx)(q, {}) }),
                ],
              })
            : (0, a.jsxs)(j.k, {
                direction: "column",
                gap: 4,
                position: "relative",
                children: [
                  (0, a.jsxs)(j.k, {
                    gap: 4,
                    children: [
                      (0, a.jsx)(c.xu, {
                        flex: "1.5",
                        children: (0, a.jsx)(Z, {}),
                      }),
                      (0, a.jsx)(c.xu, {
                        flex: "1.5",
                        children: (0, a.jsx)(X, {}),
                      }),
                    ],
                  }),
                  (0, a.jsxs)(j.k, {
                    gap: 4,
                    flexWrap: "wrap",
                    children: [
                      (0, a.jsx)(c.xu, {
                        flex: "1",
                        children: (0, a.jsx)(Q, {}),
                      }),
                      (0, a.jsxs)(j.k, {
                        direction: "column",
                        flex: "2",
                        gap: 4,
                        children: [
                          (0, a.jsx)(c.xu, {
                            flex: "1",
                            children: (0, a.jsx)(J, {}),
                          }),
                          (0, a.jsx)(c.xu, {
                            flex: "1",
                            children: (0, a.jsx)(q, {}),
                          }),
                        ],
                      }),
                      (0, a.jsx)(c.xu, {
                        flex: "1",
                        children: (0, a.jsx)(Y, {}),
                      }),
                    ],
                  }),
                ],
              }),
        });
      };
      let ee = [
        {
          title: "Influencers & Opinion Leaders",
          tags: ["Branded AI", "Strategy", "Content Builder"],
        },
        {
          title: "Businesses and Organizations",
          tags: ["Customer Support", "Marketing", "Sales", "Automation"],
        },
        {
          title: "Education & Research",
          tags: ["Tutor", "Analytics", "Data Mining"],
        },
        {
          title: "Developers & Entrepreneurs",
          tags: ["Branded AI", "Content Builder", "Strategy"],
        },
      ];
      var et = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            flexDir: "column",
            p: "1rem",
            pb: "6rem",
            pt: "6rem",
            position: "relative",
            width: "100%",
            height: "fit-content",
            gap: e ? "2rem" : "6rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsxs)(j.k, {
                width: "100%",
                justifyContent: "space-between",
                alignItems: e ? "start" : "center",
                flexDir: e ? "column" : "row",
                children: [
                  (0, a.jsx)(v.x, {
                    fontFamily: "heading",
                    fontSize: e ? "3.61444rem" : "8.125rem",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: e ? "4.86556rem" : "10.9375rem",
                    children: "Use Cases",
                  }),
                  (0, a.jsx)(v.x, {
                    bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                    backgroundClip: "text",
                    fontFamily: "heading",
                    fontSize: e ? "1.75rem" : "3.875rem",
                    fontStyle: "normal",
                    fontWeight: "700",
                    maxW: "48.9375rem",
                    children: "The possibilities are beyond your imagination",
                  }),
                ],
              }),
              (0, a.jsx)(j.k, {
                width: "100%",
                overflowX: "auto",
                gap: "2rem",
                pb: "2rem",
                children: ee.map((t, i) =>
                  (0, a.jsxs)(
                    j.k,
                    {
                      bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.00) 100%)",
                      stroke: "rgba(245, 247, 250, 0.06)",
                      filter:
                        "drop-shadow(0px 4px 4px rgba(9, 13, 20, 0.12)) drop-shadow(-2px -2px 4px rgba(224, 224, 255, 0.02)) drop-shadow(0px 1px 2px rgba(9, 13, 20, 0.24))",
                      backdropFilter: "blur(54.36563491821289px)",
                      padding: "2rem",
                      borderRadius: "2rem",
                      flexDir: "column",
                      gap: "1rem",
                      minW: e ? "20.92356rem" : "30.0625rem",
                      maxW: e ? "20.92356rem" : "30.0625rem",
                      children: [
                        (0, a.jsx)(v.x, {
                          color: "#EDEDED",
                          fontFamily: "body",
                          fontSize: e ? "1.392rem" : "2rem",
                          fontStyle: "normal",
                          fontWeight: "700",
                          lineHeight: "140%",
                          children: t.title,
                        }),
                        (0, a.jsx)(j.k, {
                          flexWrap: "wrap",
                          gap: "1.5rem",
                          children: t.tags.map((t, i) =>
                            (0, a.jsx)(
                              c.xu,
                              {
                                maxWidth: "250px",
                                height: "fit-content",
                                padding: "1px",
                                position: "relative",
                                bgGradient:
                                  "linear(to-r, #FF2091 30%, #0184FD 140%)",
                                borderRadius: "full",
                                children: (0, a.jsx)(c.xu, {
                                  background: "#222",
                                  borderRadius: "full",
                                  padding: "1px",
                                  children: (0, a.jsx)(K.Vp, {
                                    boxShadow:
                                      "0px 0px 12px 0px rgba(255, 32, 145, 0.40)",
                                    color: "white",
                                    bg: "#202126",
                                    borderRadius: "full",
                                    border: "1px solid transparent",
                                    padding: "0rem",
                                    children: (0, a.jsx)(K.Sn, {
                                      color: "#EDEDED",
                                      fontFamily: "body",
                                      fontSize: e ? "0.87rem" : "1.25rem",
                                      fontStyle: "normal",
                                      fontWeight: "600",
                                      padding: "0.5rem",
                                      children: t,
                                    }),
                                  }),
                                }),
                              },
                              i
                            )
                          ),
                        }),
                      ],
                    },
                    i
                  )
                ),
              }),
            ],
          });
        },
        ei = i(6948),
        er = i(8773);
      function en() {
        return (en = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  ({}.hasOwnProperty.call(i, r) && (e[r] = i[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      var eo = function (e) {
        return l.createElement(
          "svg",
          en(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 22,
              height: 27,
              fill: "none",
            },
            e
          ),
          r ||
            (r = l.createElement(
              "g",
              { fillRule: "evenodd", clipRule: "evenodd" },
              l.createElement("path", {
                fill: "#fff",
                fillOpacity: 0.04,
                d: "M0 26.5V0h1.767v1.767h18.55a.883.883 0 0 1 .694 1.429l-4.43 5.637 4.43 5.638a.883.883 0 0 1-.694 1.43H1.767v10.599z",
              }),
              l.createElement("path", {
                fill: "url(#flag-gradient_svg__a)",
                d: "M0 26.5V0h1.767v1.767h18.55a.883.883 0 0 1 .694 1.429l-4.43 5.637 4.43 5.638a.883.883 0 0 1-.694 1.43H1.767v10.599z",
              })
            )),
          n ||
            (n = l.createElement(
              "defs",
              null,
              l.createElement(
                "linearGradient",
                {
                  id: "flag-gradient_svg__a",
                  x1: 5.109,
                  x2: 45.391,
                  y1: -5.742,
                  y2: 7.446,
                  gradientUnits: "userSpaceOnUse",
                },
                l.createElement("stop", { stopColor: "#FF2091" }),
                l.createElement("stop", { offset: 1, stopColor: "#0184FD" })
              )
            ))
        );
      };
      let ea = {
        "Q3 2024": [
          {
            title: "Model Hub",
            events: ["Alpha Testing", "Open to Stakers", "Open to public"],
            dates: ["01/06/2024", "01/07/2024", "01/08/2024"],
          },
          {
            title: "Agents Hub",
            events: [
              "Research and Development",
              "Community Agent MVP",
              "Community Agent Toolkit",
            ],
            dates: ["01/06/2024", "01/07/2024", "01/08/2024"],
          },
          {
            title: "AI Builder",
            events: ["Research and Development", "POC", "MVP"],
            dates: ["01/06/2024", "01/07/2024", "01/08/2024"],
          },
          {
            title: "Image Hub",
            events: [
              "NFT Collection Model Development",
              "NFT Collection",
              "NFT model MVP",
            ],
            dates: ["01/06/2024", "01/07/2024", "01/08/2024"],
          },
        ],
        "Q4 2024": [
          {
            title: "Model Hub",
            events: ["Prompt Template NFT", "Toolkit development"],
            dates: ["01/11/2024", "01/10/2024"],
          },
          {
            title: "Personalized AI",
            events: ["Fine-tuning Hub MVP"],
            dates: ["01/10/2024"],
          },
          { title: "Agents Hub", events: ["Launch"], dates: ["01/12/2024"] },
          {
            title: "AI/NFT Marketplace",
            events: ["Launch"],
            dates: ["01/12/2024"],
          },
          { title: "Gaming SDK", events: ["MVP"], dates: ["01/12/2024"] },
          { title: "AI Builder", events: ["Launch"], dates: ["01/12/2024"] },
          {
            title: "Image Hub",
            events: ["Image-model Hub MVP", "Launch"],
            dates: ["01/10/2024", "01/12/2024"],
          },
        ],
        "Q1 2025": [
          {
            title: "Model Hub",
            events: ["Collaborative AI"],
            dates: ["01/01/2025"],
          },
          {
            title: "Image Hub",
            events: ["Tooling Integration"],
            dates: ["03/01/2025"],
          },
          {
            title: "Personalized AI",
            events: ["Personalization-hub integration"],
            dates: ["03/01/2025"],
          },
          { title: "Gaming SDK", events: ["Launch"], dates: ["03/01/2025"] },
          { title: "AI SDK", events: ["MVP"], dates: ["03/01/2025"] },
        ],
      };
      var el = () => {
          var e;
          let t = (0, w.S)({ base: !0, lg: !1 }),
            { isOpen: i, onOpen: r, onClose: n } = (0, u.q)(),
            [o, s] = (0, l.useState)(null),
            m = (e) => {
              s(e), r();
            };
          return (0, a.jsxs)(j.k, {
            position: "relative",
            width: "100%",
            flexDir: "column",
            p: 2,
            borderBottom: "1px solid rgba(245, 247, 250, 0.05)",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(j.k, {
                width: "100%",
                justifyContent: "center",
                p: 2,
                pt: t ? "2rem" : "10rem",
                pb: t ? "4rem" : "10rem",
                children: (0, a.jsx)(v.x, {
                  color: "white",
                  fontFamily: "heading",
                  fontSize: t ? "3.57919rem" : "8.125rem",
                  fontStyle: "normal",
                  fontWeight: "700",
                  children: "Roadmap",
                }),
              }),
              (0, a.jsx)(j.k, {
                width: "100%",
                position: "relative",
                overflowX: "auto",
                overflowY: "hidden",
                children: (0, a.jsxs)(j.k, {
                  minWidth: "1920px",
                  children: [
                    (0, a.jsxs)("svg", {
                      width: "1920",
                      height: "550",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, a.jsxs)("defs", {
                          children: [
                            (0, a.jsxs)("filter", {
                              id: "glow",
                              children: [
                                (0, a.jsx)("feGaussianBlur", {
                                  stdDeviation: "4.5",
                                  result: "coloredBlur",
                                }),
                                (0, a.jsxs)("feMerge", {
                                  children: [
                                    (0, a.jsx)("feMergeNode", {
                                      in: "coloredBlur",
                                    }),
                                    (0, a.jsx)("feMergeNode", {
                                      in: "SourceGraphic",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("linearGradient", {
                              id: "paint0_linear_1_615",
                              x1: "323.538",
                              y1: "-68.2409",
                              x2: "892.455",
                              y2: "1420.59",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                (0, a.jsx)("stop", { stopColor: "#FF2091" }),
                                (0, a.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "#0184FD",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("path", {
                          d: "M-188 24.5008C181 395.001 621 418.701 771 179.501C850.954 52 1036.4 -126.399 1222 148.001C1268.33 216.501 1375.7 325.301 1522.5 138.501C1577.9 68.0008 1723.7 14.6008 1934.5 261.001",
                          stroke: "url(#paint0_linear_1_615)",
                          strokeWidth: "7",
                          filter: "url(#glow)",
                        }),
                      ],
                    }),
                    [
                      { title: "Q3", year: "2024", x: 300, y: 425 },
                      { title: "Q4", year: "2024", x: 900, y: 150 },
                      { title: "Q1", year: "2025", x: 1500, y: 290 },
                    ].map((e, t) =>
                      (0, a.jsxs)(
                        j.k,
                        {
                          position: "absolute",
                          flexDir: "column",
                          alignItems: "center",
                          top: "".concat(e.y, "px"),
                          left: "".concat(e.x, "px"),
                          transform: "translate(-50%, -50%)",
                          children: [
                            (0, a.jsx)(c.xu, {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                              backdropFilter: "blur(5px)",
                              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                              onClick: () =>
                                m("".concat(e.title, " ").concat(e.year)),
                              cursor: "pointer",
                              children: (0, a.jsx)(ei.J, {
                                as: er.wQ2,
                                boxSize: 6,
                                color: "white",
                              }),
                            }),
                            (0, a.jsx)(j.k, {
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              pt: "10px",
                              children: (0, a.jsx)(v.x, {
                                fontSize: "2.52775rem",
                                fontWeight: "800",
                                color: "#EDEDED",
                                children: e.year,
                              }),
                            }),
                            (0, a.jsx)(v.x, {
                              textAlign: "center",
                              background:
                                "linear-gradient(0deg, rgba(255, 255, 255, 0.00) -26.68%, rgba(255, 255, 255, 0.20) 100.34%)",
                              backgroundClip: "text",
                              fontFamily: "heading",
                              fontSize: "8.33213rem",
                              fontStyle: "normal",
                              fontWeight: "700",
                              children: e.title,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  ],
                }),
              }),
              (0, a.jsxs)(k.u_, {
                isOpen: i,
                onClose: n,
                isCentered: !0,
                children: [
                  (0, a.jsx)(S.Z, {}),
                  (0, a.jsxs)(F.h, {
                    maxH: t ? "auto" : "64rem",
                    maxW: t ? "90%" : "63.5rem",
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(245, 247, 250, 0.06)",
                    background:
                      "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.00) 100%)",
                    boxShadow:
                      "0px 1px 2px 0px rgba(9, 13, 20, 0.24), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 4px 4px 0px rgba(9, 13, 20, 0.12)",
                    backdropFilter: "blur(54.36563491821289px)",
                    children: [
                      (0, a.jsxs)(G.x, {
                        p: t ? "1.5rem" : "3rem",
                        pb: t ? "0.5rem" : "1rem",
                        children: [
                          (0, a.jsx)(I.o, {}),
                          (0, a.jsxs)(j.k, {
                            justifyContent: "space-between",
                            children: [
                              (0, a.jsxs)(j.k, {
                                gap: t ? "1rem" : "2rem",
                                children: [
                                  (0, a.jsx)(v.x, {
                                    fontSize: t ? "2.5rem" : "5.03044rem",
                                    fontWeight: "700",
                                    lineHeight: t ? "1.5rem" : "2.22588rem",
                                    children: o,
                                  }),
                                  (0, a.jsx)(eo, {}),
                                ],
                              }),
                              (0, a.jsx)(c.xu, {
                                position: "absolute",
                                top: t ? "0.5rem" : "1rem",
                                right: t ? "3rem" : "4rem",
                                height: "3.4375rem",
                                width: "0.5rem",
                                borderRadius: "6.25rem",
                                bgGradient:
                                  "linear(to-b, #FF2091 -12%, #0184FD 140%)",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(E.f, {
                        pr: t ? "1.5rem" : "3rem",
                        pl: t ? "1.5rem" : "3rem",
                        pt: "0",
                        children:
                          o &&
                          (null === (e = ea[o]) || void 0 === e
                            ? void 0
                            : e.map((e, i) =>
                                (0, a.jsxs)(
                                  c.xu,
                                  {
                                    mb: 4,
                                    children: [
                                      (0, a.jsx)(v.x, {
                                        fontSize: t ? "1.5rem" : "1.53069rem",
                                        fontWeight: "700",
                                        lineHeight: t ? "1.5rem" : "1.55956rem",
                                        bgGradient:
                                          "linear(to-r, #FF2091 0%, #0184FD 45%)",
                                        backgroundClip: "text",
                                        children: e.title,
                                      }),
                                      (0, a.jsx)(c.xu, {
                                        mt: 2,
                                        children: e.events.map((i, r) =>
                                          (0, a.jsxs)(
                                            v.x,
                                            {
                                              fontSize: t
                                                ? "1.25rem"
                                                : "1.5rem",
                                              fontWeight: "500",
                                              lineHeight: t
                                                ? "1.25rem"
                                                : "130%",
                                              color: "#EDEDED",
                                              children: [e.dates[r], ": ", i],
                                            },
                                            r
                                          )
                                        ),
                                      }),
                                    ],
                                  },
                                  i
                                )
                              )),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        es = i(9993);
      function em() {
        return (em = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  ({}.hasOwnProperty.call(i, r) && (e[r] = i[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      var ec = function (e) {
        return l.createElement(
          "svg",
          em(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 32,
              height: 32,
              fill: "none",
            },
            e
          ),
          o ||
            (o = l.createElement("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16m8.2-2.7V24h3.4V13.3zM8 9.9c0 1.1.8 1.9 1.9 1.9s1.9-.8 1.9-1.9S11 8 9.9 8C8.9 8 8 8.8 8 9.9M20.6 24h3.2v-6.6c0-3.3-2-4.4-3.9-4.4-1.7 0-2.9 1.1-3.2 1.8v-1.5h-3.2V24h3.4v-5.7c0-1.5 1-2.3 2-2.3s1.7.5 1.7 2.2z",
              clipRule: "evenodd",
            }))
        );
      };
      let ed = [
        {
          id: 1,
          name: "Zoltan Prokai",
          title: "CEO",
          bio: [
            "Ex. Head of R&D Division for Technology / Energy companies",
            "MSc in Blockchain and Digital Currencies",
            "Serial Entrepreneur",
            "Crypto & Tech Fanatic",
          ],
          image: "/images/zoltan_prokai.png",
          linkedInUrl: "https://www.linkedin.com/in/zprokai/",
        },
        {
          id: 2,
          name: "Emanuel Hernandez",
          title: "CTO",
          bio: [
            "Ex. Apple ML Engineer",
            "Senior Machine Learning Engineer at Fortune 500 companies",
          ],
          image: "/images/emanuel_hernandez.png",
          linkedInUrl: "https://www.linkedin.com/in/emanuelhc/",
        },
        {
          id: 3,
          name: "Stanley Harrison",
          title: "COO",
          bio: [
            "Physical Chemistry (Photovoltaics)",
            "R&D lead for Comb Financial (2022)",
            "Hands-on experience helping half a dozen crypto start-ups get off the ground",
            "Chain Agnostic",
          ],
          image: "/images/stanley_harrison.png",
          linkedInUrl: "https://www.linkedin.com/in/stanley0001/",
        },
      ];
      var eh = () => {
          let e = (0, w.S)({ base: !0, lg: !1 }),
            [t, i] = (0, l.useState)(ed[0]);
          return (0, a.jsxs)(j.k, {
            position: "relative",
            width: "100%",
            flexDir: "column",
            p: "2rem",
            pb: "2rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsxs)(j.k, {
                width: "100%",
                flexDir: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                pt: e ? "4rem" : "10rem",
                children: [
                  (0, a.jsx)(v.x, {
                    color: "white",
                    fontFamily: "heading",
                    fontSize: e
                      ? "clamp(2.5rem, 6vw, 4.12463rem)"
                      : "clamp(5rem, 10vw, 8.125rem)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    children: "Core Team",
                  }),
                  (0, a.jsx)(v.x, {
                    bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                    backgroundClip: "text",
                    fontFamily: "heading",
                    fontSize: e
                      ? "clamp(1rem, 4vw, 1.68156rem)"
                      : "clamp(2rem, 6vw, 3.3125rem)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: e ? "1.71331rem" : "3.375rem",
                    children: "The Founders",
                  }),
                ],
              }),
              (0, a.jsx)(j.k, {
                width: "100%",
                mt: 8,
                flexDirection: e ? "column" : "row",
                alignItems: "center",
                pb: e ? "2rem" : "10rem",
                position: "relative",
                overflowX: e ? "visible" : "auto",
                children: e
                  ? (0, a.jsxs)(j.k, {
                      flexDirection: "column",
                      alignItems: "baseline",
                      width: "100%",
                      position: "relative",
                      children: [
                        (0, a.jsx)(d.E, {
                          background: "rgba(255, 255, 255, 0.06)",
                          backdropFilter: "blur(10.806440353393555px)",
                          borderRadius: "0.79456rem",
                          src: t.image,
                          alt: t.name,
                          width: "15rem",
                          height: "19rem",
                          objectFit: "cover",
                        }),
                        (0, a.jsx)(j.k, {
                          mt: "2",
                          gap: 2,
                          width: "100%",
                          justifyContent: "end",
                          children: ed.map((e) =>
                            (0, a.jsx)(
                              c.xu,
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
                        (0, a.jsxs)(j.k, {
                          flexDir: "column",
                          color: "white",
                          maxW: "100%",
                          textAlign: "start",
                          children: [
                            (0, a.jsx)(v.x, {
                              bgGradient:
                                "linear(to-r, #FF2091 30%, #0184FD 140%)",
                              backgroundClip: "text",
                              fontFamily: "heading",
                              fontSize: "clamp(0.875rem, 2vw, 1.21275rem)",
                              fontStyle: "normal",
                              fontWeight: "800",
                              lineHeight: "normal",
                              children: t.title,
                            }),
                            (0, a.jsxs)(j.k, {
                              alignItems: "center",
                              gap: "4px",
                              children: [
                                (0, a.jsx)(v.x, {
                                  fontFamily: "heading",
                                  fontSize: "clamp(1.25rem, 4vw, 1.71331rem)",
                                  fontStyle: "normal",
                                  fontWeight: "700",
                                  lineHeight: "2.17281rem",
                                  children: t.name,
                                }),
                                (0, a.jsx)(es.h, {
                                  as: "a",
                                  href: t.linkedInUrl,
                                  icon: (0, a.jsx)(ec, {}),
                                  "aria-label": "LinkedIn",
                                  variant: "ghost",
                                  colorScheme: "whiteAlpha",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  mr: 2,
                                }),
                              ],
                            }),
                            (0, a.jsx)(j.k, {
                              flexDir: "column",
                              mt: "1rem",
                              children: t.bio.map((e, t) =>
                                (0, a.jsx)(
                                  v.x,
                                  {
                                    color: "#EDEDED",
                                    fontFamily: "body",
                                    fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "1.4rem",
                                    children: e,
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, a.jsx)(a.Fragment, {
                      children: ed.map((e) =>
                        (0, a.jsxs)(
                          j.k,
                          {
                            position: "relative",
                            gap: "2rem",
                            mx: 2,
                            onClick: () => i(e),
                            cursor: "pointer",
                            flexDirection: "row",
                            alignItems: "center",
                            minW: "fit-content",
                            children: [
                              (0, a.jsx)(d.E, {
                                background: "rgba(255, 255, 255, 0.06)",
                                backdropFilter: "blur(10.806440353393555px)",
                                borderRadius: "0.79456rem",
                                src: e.image,
                                alt: e.name,
                                width: "21.3125rem",
                                height: "27.125rem",
                                objectFit: "cover",
                                filter:
                                  t.id === e.id ? "none" : "grayscale(100%)",
                                transition: "filter 0.3s ease",
                                _hover: { filter: "none" },
                              }),
                              t.id === e.id &&
                                (0, a.jsxs)(j.k, {
                                  flexDir: "column",
                                  mt: 4,
                                  color: "white",
                                  maxW: "45.625rem",
                                  children: [
                                    (0, a.jsx)(v.x, {
                                      textAlign: "justify",
                                      bgGradient:
                                        "linear(to-r, #FF2091 30%, #0184FD 140%)",
                                      backgroundClip: "text",
                                      fontFamily: "heading",
                                      fontSize: "clamp(1rem, 4vw, 1.5rem)",
                                      fontStyle: "normal",
                                      fontWeight: "800",
                                      lineHeight: "normal",
                                      children: t.title,
                                    }),
                                    (0, a.jsxs)(j.k, {
                                      alignItems: "center",
                                      gap: "8px",
                                      children: [
                                        (0, a.jsx)(v.x, {
                                          fontFamily: "heading",
                                          fontSize:
                                            "clamp(2rem, 6vw, 3.375rem)",
                                          fontStyle: "normal",
                                          fontWeight: "700",
                                          lineHeight: "6.25rem",
                                          children: t.name,
                                        }),
                                        (0, a.jsx)(es.h, {
                                          as: "a",
                                          href: t.linkedInUrl,
                                          icon: (0, a.jsx)(ec, {}),
                                          "aria-label": "LinkedIn",
                                          variant: "ghost",
                                          colorScheme: "whiteAlpha",
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          mr: 2,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)(j.k, {
                                      flexDir: "column",
                                      mt: "1rem",
                                      children: t.bio.map((e, t) =>
                                        (0, a.jsx)(
                                          v.x,
                                          {
                                            color: "#EDEDED",
                                            fontFamily: "body",
                                            fontSize:
                                              "clamp(1rem, 4vw, 1.625rem)",
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            lineHeight: "130%",
                                            children: e,
                                          },
                                          t
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          },
                          e.id
                        )
                      ),
                    }),
              }),
            ],
          });
        },
        eg = i(959),
        ep = i(4028),
        ex = i(889),
        eb = i(4461),
        ef = i(4124);
      let eu = (e) => {
        let { tabs: t, onSelect: i } = e,
          r = (0, w.S)({ base: !0, lg: !1 });
        return (0, a.jsxs)(eg.m, {
          variant: "unstyled",
          onChange: i,
          children: [
            (0, a.jsx)(ep.n, {
              children: t.map((e, t) =>
                (0, a.jsx)(
                  ex.x,
                  {
                    padding: 0,
                    children: (0, a.jsx)(c.xu, {
                      width: r ? "18.7225rem" : "32.4375rem",
                      height: r ? "22.94313rem" : "39.75rem",
                      children: e.content,
                    }),
                  },
                  t
                )
              ),
            }),
            (0, a.jsx)(eb.t, {
              gap: "1rem",
              pt: "1rem",
              children: t.map((e, t) =>
                (0, a.jsx)(
                  ef.O,
                  {
                    padding: "5px",
                    width: "3.4375rem",
                    height: "0.2rem",
                    bg: "rgba(217, 217, 217, 0.10)",
                    borderRadius: "6.25rem",
                    _selected: {
                      bg: "linear-gradient(112deg, #FF2091 10.81%, #0184FD 160.09%), rgba(255, 255, 255, 0.04)",
                    },
                    _focus: { boxShadow: "none" },
                  },
                  t
                )
              ),
            }),
          ],
        });
      };
      var ew = () => {
          let e;
          let t = (0, w.S)({ base: !0, lg: !1 }),
            { isOpen: i, onOpen: r, onClose: n } = (0, u.q)(),
            o = [
              {
                name: "Brian Rose",
                bio: "After graduating from MIT and the Sloan School of Management, Brian spent 15 years trading complex derivatives in the financial markets on Wall Street, Chicago and the City of London. Disillusioned with the rat race, Brian sought a fresh challenge and founded London Real in 2011 as a podcast, where for more than a decade he has broadcast over 1000 long-form conversations which have been viewed over a billion times. Guests have included Mantak Chia, Robert Kiyosaki, Wim Hof, Dr. Joe Dispenza, Robert F Kennedy Jr., Dan Bilzerian and Michael Saylor among a host of other names including authors, philosophers, politicians, sporting stars and experts from every conceivable field. More recently Brian has continued to grow the brand, introducing a highly sought after Investment Club to accompany his Wealth Accelerator and Crypto & DeFi Academy with the vision of educating the next 1 Billion people in the Web3, Metaverse, and Artificial Intelligence ecosystems.",
                imageSrc: "/images/brian_rose.jpg",
              },
              {
                name: "Amit Patel",
                bio: "Amit Patel has one foot in Web2 and the other in Web3 with experience as partner in technology executive search, co-founder in AI migraine digital healthcare, and partner in Web3 venture capital. His expertise lies in building and supporting AI, blockchain, and engineered products to market through growth strategies, business development / partnerships, commercial advisory, and operational support. He uses his collective experience to drive sustainable growth and adoption in the crypto space. ",
                imageSrc: "/images/amit_patel.jpeg",
                linkedinUrl: "https://www.linkedin.com/in/apamitpatel/",
              },
              {
                name: "Kaspiy",
                bio: "Kaspiy is a Founder of Open Market Group (OMG) – an upcoming Democratized Investment & Launchpad Infrastructure backed by RWA & RWB. He is also a Co-founder and GP in a $120m+ Commodity Fund, and priorly ran one of the most successful Web3 Marketing Agencies with 25+ projects, and millions of dollars in revenue for clients. \n            He is an active Web3 builder, fundraiser, and angel investor with a 7-figure portfolio in blockchain projects. Charity contributor, educator, and consultant in international affairs and business development.",
                imageSrc: "/images/kaspiy.png",
              },
              {
                name: "Gabriel Gagliardon",
                bio: "Gabriel is a seasoned entrepreneur with over a decade of experience, during which he has built several successful brands. Among them is El Kilombo, the most influential social media channel in Latin America, boasting a following that includes hundreds of celebrities like Messi and reaching over 60 million people every month. Leveraging the success of El Kilombo, Gabriel and his team have launched a Web3 Venture arm, investing in and advising top-tier projects in the space, such as Skillful and more than 30 other ventures.            ",
                imageSrc: "/images/gabriel_gagliardoni.png",
              },
            ],
            [s, m] = (0, l.useState)(0),
            h = o.map((e) => ({
              content: (0, a.jsx)(d.E, {
                width: t ? "18.7225rem" : "32.4375rem",
                height: t ? "22.94313rem" : "39.75rem",
                backdropFilter: "blur(10.806440353393555px)",
                bg: "rgba(255, 255, 255, 0.06)",
                borderRadius: "0.79456rem",
                objectFit: "cover",
                alt: e.name,
                src: e.imageSrc,
              }),
            }));
          return (0, a.jsxs)(j.k, {
            flexDir: { base: "column", lg: "row" },
            borderBottom: "1px solid rgba(245, 247, 250, 0.05)",
            p: "2rem",
            position: "relative",
            width: "100%",
            height: "fit-content",
            alignItems: "center",
            justifyContent: "space-between",
            gap: t ? "1rem" : "9rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(j.k, {
                flexDir: "column",
                pt: t ? "2rem" : "5rem",
                pb: t ? "2rem" : "5rem",
                position: "relative",
                children: (0, a.jsxs)(j.k, {
                  gap: t ? "0.5rem" : "5rem",
                  flexDir: t ? "column" : "row",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                  children: [
                    t &&
                      (0, a.jsx)(v.x, {
                        textAlign: "center",
                        color: "white",
                        fontFamily: "heading",
                        fontSize: t
                          ? "clamp(2.5rem, 6vw, 4.125rem)"
                          : "clamp(5rem, 10vw, 8.125rem)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "4.375rem",
                        pb: "1rem",
                        children: "Advisors",
                      }),
                    (0, a.jsx)(j.k, {
                      width: "100%",
                      justifyContent: t ? "start" : "initial",
                      children: (0, a.jsx)(eu, { tabs: h, onSelect: m }),
                    }),
                    (0, a.jsxs)(j.k, {
                      width: "100%",
                      flexDir: "column",
                      gap: "0.5rem",
                      justifyContent: "start",
                      children: [
                        !t &&
                          (0, a.jsx)(v.x, {
                            textAlign: "start",
                            color: "white",
                            fontFamily: "heading",
                            fontSize: t
                              ? "clamp(2.5rem, 6vw, 4.125rem)"
                              : "clamp(5rem, 10vw, 8.125rem)",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "7.375rem",
                            children: "Advisors",
                          }),
                        (0, a.jsx)(v.x, {
                          bgGradient:
                            "linear(to-r, #FF2091 -12%, #0184FD 140%)",
                          backgroundClip: "text",
                          fontFamily: "heading",
                          fontSize: t
                            ? "clamp(1.5rem, 4vw, 2.18875rem)"
                            : "clamp(2rem, 6vw, 3.375rem)",
                          fontStyle: "normal",
                          fontWeight: "700",
                          lineHeight: t ? "4.05325rem" : "6.25rem",
                          children: o[s].name,
                        }),
                        (0, a.jsx)(v.x, {
                          color: "#EDEDED",
                          fontFamily: "body",
                          fontSize: t
                            ? "clamp(0.75rem, 4vw, 0.875rem)"
                            : "clamp(1rem, 6vw, 1.5rem)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: t ? "150%" : "140%",
                          children:
                            (e = o[s].bio).length > 325
                              ? e.substring(0, 325) + "..."
                              : e,
                        }),
                        (0, a.jsx)(v.x, {
                          onClick: () => {
                            r();
                          },
                          color: "#E2E2E2",
                          textAlign: "left",
                          fontFamily: "Montserrat",
                          fontSize: t
                            ? "clamp(0.75rem, 2vw, 0.875rem)"
                            : "clamp(1rem, 4vw, 1rem)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight: t ? "1.225rem" : "1.4rem",
                          textDecorationLine: "underline",
                          cursor: "pointer",
                          children: "Read more",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)(k.u_, {
                isOpen: i,
                onClose: n,
                children: [
                  (0, a.jsx)(S.Z, {}),
                  (0, a.jsxs)(F.h, {
                    maxH: t ? "auto" : "64rem",
                    maxW: t ? "90%" : "63.5rem",
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(245, 247, 250, 0.06)",
                    background:
                      "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.00) 100%)",
                    boxShadow:
                      "0px 1px 2px 0px rgba(9, 13, 20, 0.24), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 4px 4px 0px rgba(9, 13, 20, 0.12)",
                    backdropFilter: "blur(54.36563491821289px)",
                    children: [
                      (0, a.jsxs)(G.x, {
                        color: "#FFF",
                        fontFamily: "Futura Now Headline",
                        fontSize: t
                          ? "clamp(1rem, 4vw, 1.5rem)"
                          : "clamp(2rem, 6vw, 3rem)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: t ? "2rem" : "3.375rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [
                          o[s].name,
                          (0, a.jsxs)(c.xu, {
                            display: "flex",
                            alignItems: "center",
                            children: [
                              o[s].linkedinUrl &&
                                (0, a.jsx)(es.h, {
                                  as: "a",
                                  href: o[s].linkedinUrl,
                                  icon: (0, a.jsx)(ec, {}),
                                  "aria-label": "LinkedIn",
                                  variant: "ghost",
                                  colorScheme: "whiteAlpha",
                                  mr: 2,
                                }),
                              (0, a.jsx)(I.o, { position: "relative", top: 0 }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(E.f, {
                        children: (0, a.jsxs)(c.xu, {
                          children: [
                            (0, a.jsx)(d.E, {
                              pb: t ? "1rem" : "0",
                              borderRadius: "1.25rem",
                              objectFit: "cover",
                              src: o[s].imageSrc,
                              alt: o[s].name,
                              width: t ? "19.9375rem" : "20.25rem",
                              height: t ? "25.25rem" : "auto",
                              mb: t ? 4 : 0,
                              float: t ? "none" : "left",
                              margin: t ? "0 auto" : "0 1rem 0 0",
                            }),
                            (0, a.jsx)(v.x, {
                              textAlign: "justify",
                              color: "#EDEDED",
                              fontFamily: "Montserrat",
                              fontSize: t
                                ? "clamp(0.75rem, 4vw, 0.875rem)"
                                : "clamp(1rem, 6vw, 1.5rem)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "150%",
                              children: o[s].bio,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ej = i(77),
        ev = () => {
          let e = (0, w.S)({ base: !0, lg: !1 });
          return (0, a.jsxs)(j.k, {
            flexDir: "column",
            borderBottom: "1px solid rgba(245, 247, 250, 0.05)",
            pl: "1rem",
            pr: "1rem",
            pt: "10rem",
            position: "relative",
            width: "100%",
            height: "fit-content",
            alignItems: "center",
            justifyContent: "center",
            overflowX: "visible",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsxs)(j.k, {
                width: "100%",
                flexDir: "column",
                gap: e ? "2rem" : "7rem",
                pb: "5rem",
                alignItems: "center",
                children: [
                  (0, a.jsx)(v.x, {
                    maxW: "70.75rem",
                    color: "white",
                    fontFamily: "heading",
                    fontSize: e ? "2.125rem" : "4.5rem",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: e ? "2.625rem" : "5.1875rem",
                    textAlign: "center",
                    children: "A lot is happening. We are blogging about it.",
                  }),
                  (0, a.jsx)(ej.Z, {}),
                ],
              }),
            ],
          });
        },
        ey = i(6389),
        ek = () => {
          let e = (0, w.S)({ base: !0, lg: !1 }),
            t = [
              { name: "AVALON 1" },
              { name: "AZA-VENTURES 1" },
              { name: "Cogitent Ventures Horizontal Light Transparent 1" },
              { name: "Contango-B_White 1" },
              { name: "FOUNDERHEADS WHITE 1" },
              { name: "Gritnova" },
              { name: "Group-2 1" },
              { name: "hela" },
              { name: "MQ - White 1" },
              { name: "nillion" },
              { name: "notname" },
              { name: "photo_2024-06-05-23.03 1" },
              { name: "SKALE_White_Transparent 1" },
              { name: "skelpo" },
              { name: "VVV WHITE 1" },
            ];
          return (0, a.jsxs)(j.k, {
            width: "100%",
            justifyContent: "center",
            p: "2rem",
            pt: "8rem",
            pb: "8rem",
            position: "relative",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsxs)(j.k, {
                bg: "linear-gradient(135deg, rgba(245, 247, 250, 0.06) 0%, rgba(245, 247, 250, 0.00) 100%)",
                stroke: "rgba(245, 247, 250, 0.06)",
                filter:
                  "drop-shadow(0px 4px 4px rgba(9, 13, 20, 0.12)) drop-shadow(-2px -2px 4px rgba(224, 224, 255, 0.02)) drop-shadow(0px 1px 2px rgba(9, 13, 20, 0.24))",
                backdropFilter: "blur(54.36563491821289px)",
                padding: "2rem",
                borderRadius: "1rem",
                flexDir: "column",
                gap: "3rem",
                width: "100%",
                maxW: "97.25rem",
                children: [
                  (0, a.jsx)(v.x, {
                    textAlign: "center",
                    bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                    backgroundClip: "text",
                    fontFamily: "heading",
                    fontSize: e ? "2rem" : "3.5rem",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: e ? "2.78406rem" : "4.375rem",
                    children: "Backers & Partners",
                  }),
                  (0, a.jsxs)(j.k, {
                    flexDir: "column",
                    gap: "1rem",
                    overflowX: "auto",
                    children: [
                      (0, a.jsx)(j.k, {
                        pl: "3rem",
                        pr: "2rem",
                        gap: "1rem",
                        justifyContent: "space-between",
                        children: t
                          .slice(0, Math.ceil(t.length / 2))
                          .map((e) =>
                            (0, a.jsx)(
                              d.E,
                              {
                                src: "/icons/partners/".concat(e.name, ".svg"),
                                alt: e.name,
                                width: "100px",
                                height: "100px",
                              },
                              e.name
                            )
                          ),
                      }),
                      (0, a.jsx)(j.k, {
                        pl: "3rem",
                        pr: "2rem",
                        gap: "1rem",
                        justifyContent: "space-between",
                        children: t
                          .slice(Math.ceil(t.length / 2))
                          .map((e) =>
                            (0, a.jsx)(
                              d.E,
                              {
                                src: "/icons/partners/".concat(e.name, ".svg"),
                                alt: e.name,
                                width: "100px",
                                height: "100px",
                              },
                              e.name
                            )
                          ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        eS = i(5711),
        eF = () => {
          let e = (0, w.S)({ base: !0, lg: !1 }),
            [t, i] = (0, l.useState)(!1);
          return (0, a.jsxs)(j.k, {
            position: "relative",
            gap: "5rem",
            width: "100%",
            flexDir: e ? "column" : "row",
            alignItems: "center",
            p: "2rem",
            children: [
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "15%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(c.xu, {
                position: "absolute",
                top: "0",
                left: "45%",
                width: "1px",
                height: "100%",
                background: "rgba(245, 247, 250, 0.05)",
                zIndex: -1,
              }),
              (0, a.jsx)(j.k, {
                alignItems: "center",
                justifyContent: "center",
                width: e ? "100%" : "50%",
                children: (0, a.jsx)(d.E, {
                  width: e ? "21.96875rem" : "48.125rem",
                  height: e ? "18.50281rem" : "38.95481rem",
                  src: "/icons/waitlist.svg",
                  alt: "",
                }),
              }),
              (0, a.jsxs)(j.k, {
                width: e ? "100%" : "50%",
                flexDir: "column",
                gap: "2rem",
                children: [
                  (0, a.jsx)(v.x, {
                    bgGradient: "linear(to-r, #FF2091 30%, #0184FD 140%)",
                    backgroundClip: "text",
                    fontSize: e ? "1.76269rem" : "3.375rem",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: e ? "1.76269rem" : "3.375rem",
                    children:
                      "Seize the moment! Dive into the world of skillful AI now and uncover its limitless possibilities.",
                  }),
                  (0, a.jsx)(v.x, {
                    color: "#CECECE",
                    fontFamily: "body",
                    fontSize: e ? "0.875rem" : "1.25rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: e ? "1.225rem" : "2.25rem",
                    children:
                      "It's time to become a part of this transformative journey, where AI transcends its boundaries and becomes a versatile tool in your hands. Embrace the evolution, and together, let's redefine what's achievable in the realm of AI.",
                  }),
                  (0, a.jsxs)(y.z, {
                    onClick: () => {
                      i(!0);
                    },
                    height: { base: "3rem", lg: "72px" },
                    width: { base: "250px", lg: "350px" },
                    textAlign: "center",
                    fontSize: { base: "0.8rem", lg: "1.125rem" },
                    backgroundColor: "transparent",
                    position: "relative",
                    children: [
                      (0, a.jsx)(d.E, {
                        position: "absolute",
                        height: "100%",
                        width: "75.65%",
                        top: "0%",
                        right: "24.35%",
                        bottom: "0%",
                        left: e ? "-1%" : "0%",
                        maxWidth: "100%",
                        overflow: "hidden",
                        maxHeight: "100%",
                        src: "/icons/button/Rectangle 196.svg",
                        alt: "",
                      }),
                      (0, a.jsx)(v.x, {
                        position: "absolute",
                        top: "calc(50% - 6px)",
                        left: "3.75%",
                        textTransform: "uppercase",
                        fontWeight: "500",
                        color: "gray.400",
                        children: "Join The WaitList",
                      }),
                      (0, a.jsx)(d.E, {
                        position: "absolute",
                        width: "2.32%",
                        top: "calc(50% - 25px)",
                        right: "97.68%",
                        left: "0%",
                        maxWidth: "100%",
                        overflow: "hidden",
                        height: "3.131rem",
                        objectFit: "contain",
                        src: "/icons/button/Vector 73.svg",
                        alt: "",
                      }),
                      (0, a.jsx)(d.E, {
                        position: "absolute",
                        height: "100%",
                        width: "50.14%",
                        top: "0%",
                        right: "0%",
                        bottom: "0%",
                        left: "49.86%",
                        maxWidth: "100%",
                        overflow: "hidden",
                        maxHeight: "100%",
                        src: "/icons/button/Vector 75.svg",
                        alt: "",
                      }),
                      (0, a.jsx)(d.E, {
                        position: "absolute",
                        width: "11.88%",
                        top: "calc(50% - 9px)",
                        right: "11.01%",
                        left: "77.1%",
                        maxWidth: "100%",
                        overflow: "hidden",
                        height: "0.563rem",
                        src: "/icons/button/Vector 78.svg",
                        alt: "",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(eS.Z, { isOpen: t, setIsOpen: i }),
            ],
          });
        },
        eI = () =>
          (0, a.jsxs)(s.Z, {
            children: [
              (0, a.jsx)("div", { id: "home", children: (0, a.jsx)(m.Z, {}) }),
              (0, a.jsx)("div", { id: "brands", children: (0, a.jsx)(f, {}) }),
              (0, a.jsx)("div", {
                id: "whatIsSkillfulAI",
                children: (0, a.jsx)(C, {}),
              }),
              (0, a.jsx)("div", {
                id: "highlights",
                children: (0, a.jsx)(H, {}),
              }),
              (0, a.jsx)("div", {
                id: "skillfulApp",
                children: (0, a.jsx)(R, {}),
              }),
              (0, a.jsx)("div", {
                id: "features",
                children: (0, a.jsx)(M, {}),
              }),
              (0, a.jsx)("div", {
                id: "brandedAI",
                children: (0, a.jsx)(V, {}),
              }),
              (0, a.jsx)("div", { id: "token", children: (0, a.jsx)(P, {}) }),
              (0, a.jsx)("div", {
                id: "tokenomics",
                children: (0, a.jsx)(N, {}),
              }),
              (0, a.jsx)("div", {
                id: "technology",
                children: (0, a.jsx)($, {}),
              }),
              (0, a.jsx)("div", {
                id: "useCases",
                children: (0, a.jsx)(et, {}),
              }),
              (0, a.jsx)("div", {
                id: "roadMap",
                children: (0, a.jsx)(el, {}),
              }),
              (0, a.jsx)("div", {
                id: "coreTeam",
                children: (0, a.jsx)(eh, {}),
              }),
              (0, a.jsx)("div", {
                id: "advisors",
                children: (0, a.jsx)(ew, {}),
              }),
              (0, a.jsx)("div", {
                id: "partners",
                children: (0, a.jsx)(ek, {}),
              }),
              (0, a.jsx)("div", {
                id: "join-waitlist",
                children: (0, a.jsx)(eF, {}),
              }),
              (0, a.jsx)("div", { id: "blog", children: (0, a.jsx)(ev, {}) }),
              (0, a.jsx)("div", {
                id: "footer",
                children: (0, a.jsx)(ey.Z, {}),
              }),
            ],
          });
    },
    169: function (e, t, i) {
      "use strict";
      var r = i(5893),
        n = i(3558),
        o = i(7747),
        a = i(4e3),
        l = i(3717),
        s = i(6712),
        m = i(1170),
        c = i(4040),
        d = i(8230),
        h = i(4225),
        g = i(6089),
        p = i(9332);
      t.Z = () => {
        let e = (0, p.usePathname)();
        (0, p.useRouter)();
        let t = (0, n.S)({ base: !0, md: !1 });
        return (0, r.jsxs)(o.xu, {
          bg: "linear-gradient(-88deg, #0a090f00 0%, #0a090fcc 100%)",
          position: "relative",
          height: "67.5rem",
          children: [
            (0, r.jsx)("video", {
              style: { objectFit: "cover", width: "100%", height: "inherit" },
              src: "https://d3ffj5dtyzpu98.cloudfront.net/Video%20Hero.mp4",
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              controls: !1,
            }),
            (0, r.jsxs)(o.xu, {
              position: "absolute",
              top: { base: "13.06rem", md: "27.37rem" },
              p: "1.25rem",
              maxW: "47.4375rem",
              children: [
                (0, r.jsx)(a.x, {
                  fontSize: { base: "1.25rem", md: "2.125rem" },
                  lineHeight: { base: "2rem", md: "6.25rem" },
                  fontWeight: "500",
                  fontFamily: "heading",
                  bgGradient: "linear(to-r, #FF2091 0%, #0184FD 100%)",
                  bgClip: "text",
                  color: "transparent",
                  children: "Unleash your true power with",
                }),
                (0, r.jsx)(a.x, {
                  color: "white",
                  textShadow: {
                    base: "0px 2.428px 6.071px rgba(0, 0, 0, 0.25)",
                    md: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  },
                  fontFamily: "heading",
                  fontSize: { base: "4.17375rem", md: "6.875rem" },
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: { base: "120%", md: "120%" },
                  textTransform: "capitalize",
                  mb: { base: "13.62rem", md: "0" },
                  children: "Skillful AI",
                }),
                (0, r.jsx)(a.x, {
                  textAlign: "justify",
                  color: "white",
                  textShadow: {
                    base: "0px 2.428px 6.071px rgba(0, 0, 0, 0.25)",
                    md: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  },
                  fontFamily: "body",
                  fontSize: { base: "1rem", md: "1.25rem" },
                  fontStyle: "normal",
                  fontWeight: { base: "300", md: "400" },
                  lineHeight: { base: "150%", md: "150%" },
                  mb: "1.44rem",
                  children:
                    "Stay ahead of the evolving technological landscape with Skillful AI's groundbreaking personalized AI Ecosystem.",
                }),
                (0, r.jsx)(a.x, {
                  color: "white",
                  textShadow: {
                    base: "0px 2.428px 6.071px rgba(0, 0, 0, 0.25)",
                    md: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  },
                  fontFamily: "body",
                  fontSize: { base: "1rem", md: "1.25rem" },
                  fontStyle: "normal",
                  fontWeight: { base: "300", md: "400" },
                  lineHeight: { base: "150%", md: "150%" },
                  children:
                    "Witness the transition from basic chatbots to advanced virtual assistants and tailor-made AI solutions. As the tech arena races forward, Skillful AI emerges as your gateway to harnessing the benefits of this revolution.",
                }),
                "/skai" === e &&
                  (0, r.jsxs)(l.k, {
                    mt: "1rem",
                    alignItems: "center",
                    gap: "32px",
                    flexDir: t ? "column" : "row",
                    children: [
                      (0, r.jsxs)(s.v, {
                        matchWidth: !0,
                        children: [
                          (0, r.jsx)(m.j, {
                            fontSize: { base: "0.8rem", md: "1.125rem" },
                            color: "#ededed",
                            borderRadius: "10px",
                            bgGradient:
                              "linear(to-r, #FF2091 0%, #0184FD 140%)",
                            p: "1.8rem",
                            height: "72px",
                            width: "350px",
                            _hover: {
                              bgGradient:
                                "linear(to-r, #FF2091 0%, #0184FD 140%)",
                            },
                            children: (0, r.jsx)(a.x, {
                              textTransform: "uppercase",
                              fontWeight: "500",
                              fontSize: { base: "0.8rem", md: "1.125rem" },
                              children: "Buy Token",
                            }),
                          }),
                          (0, r.jsxs)(c.q, {
                            bg: "rgba(0, 0, 0, 0.5)",
                            border: "1px solid rgba(245, 247, 250, 0.06)",
                            backdropFilter: "blur(20px)",
                            borderRadius: "5px",
                            shadow: "none",
                            boxSizing: "border-box",
                            children: [
                              (0, r.jsx)(d.s, {
                                as: "a",
                                href: "https://www.gate.io/trade/SKAI_USDT",
                                target: "_blank",
                                bg: "transparent",
                                children: "Gate.io",
                              }),
                              (0, r.jsx)(d.s, {
                                as: "a",
                                href: "https://www.mexc.com/exchange/SKAI_USDT",
                                target: "_blank",
                                bg: "transparent",
                                children: "Mexc",
                              }),
                              (0, r.jsx)(d.s, {
                                as: "a",
                                href: "https://app.uniswap.org/explore/tokens/ethereum/0xcf078da6e85389de507ceede0e3d217e457b9d49",
                                target: "_blank",
                                bg: "transparent",
                                children: "Uniswap",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)(h.z, {
                        height: "72px",
                        width: "350px",
                        textAlign: "center",
                        backgroundColor: "transparent",
                        position: "relative",
                        onClick: () => {
                          window.open("https://app.skillfulai.io/", "_blank");
                        },
                        _hover: { bg: "transparent" },
                        children: [
                          (0, r.jsx)(g.E, {
                            position: "absolute",
                            height: "100%",
                            width: "75.65%",
                            top: "0%",
                            right: "24.35%",
                            bottom: "0%",
                            left: "0",
                            maxWidth: "100%",
                            overflow: "hidden",
                            maxHeight: "100%",
                            src: "/icons/button/Rectangle 196.svg",
                            alt: "",
                          }),
                          (0, r.jsx)(a.x, {
                            position: "absolute",
                            top: "calc(50% - 6px)",
                            left: "12.75%",
                            textTransform: "uppercase",
                            fontWeight: "500",
                            fontSize: { base: "0.8rem", md: "1.125rem" },
                            children: "Launch App",
                          }),
                          (0, r.jsx)(g.E, {
                            position: "absolute",
                            width: "2.32%",
                            top: "calc(50% - 25px)",
                            right: "97.68%",
                            left: "0%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            height: "3.131rem",
                            objectFit: "contain",
                            src: "/icons/button/Vector 73.svg",
                            alt: "",
                          }),
                          (0, r.jsx)(g.E, {
                            position: "absolute",
                            height: "100%",
                            width: "50.14%",
                            top: "0%",
                            right: "0%",
                            bottom: "0%",
                            left: "49.86%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            maxHeight: "100%",
                            src: "/icons/button/Vector 75.svg",
                            alt: "",
                          }),
                          (0, r.jsx)(g.E, {
                            position: "absolute",
                            width: "11.88%",
                            top: "calc(50% - 9px)",
                            right: "11.01%",
                            left: "77.1%",
                            maxWidth: "100%",
                            overflow: "hidden",
                            height: "0.563rem",
                            src: "/icons/button/Vector 78.svg",
                            alt: "",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [365, 403, 332, 208, 85, 961, 888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
