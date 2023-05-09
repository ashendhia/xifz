import '@/styles/globals.css'
import { useState, useRef, useEffect } from 'react'
import en from "/public/assets/en.png"
import fr from "/public/assets/fr.png"
import ar from "/public/assets/ar.png"

import Link from 'next/link'

export default function App({ Component, pageProps }) {

  function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  let top;

  let lg;
  let lgRt;
  let nav;
  let foot;

  const navBarTable = {
    en: {
      home: "Home",
      project: "Project",
      invest: "Invest",
      eco: "Ecosystem",
      faq: "FAQ",
      contact: "Contact"
    },
    fr: {
      home: "Accueil",
      project: "Projet",
      invest: "Investir",
      eco: "Écosystème",
      faq: "FAQ",
      contact: "Contact"
    },
    ar: {
      home: "الرئيسية",
      project: "المشروع",
      invest: "استثمر",
      eco: "الخدمات",
      faq: "التعليمات",
      contact: "التواصل"

    }
  }
  const footerTable = {
    en: {
      started: {
        start: "Ready to get started?",
        join: "Join us"
      },
      about: {
        title: "About",
        story: "My Story",
        project: "ZENIQ SAFIR",
        zhub: "ZENIQ Hub"
      },
      discover: {
        title: "Discover",
        zcoin: "ZENIQ Coin",
        zpay: "ZENIQ Pay",
        zexc: "ZENIQ Exchange",
        nomo: "Nomo"
      },
      projects: {
        title: "Projects",
        avinoc: "AVINOC",
        tdrone: "TDRONE",
        tupan: "TUPAN",
        sidi: "SIDI TOKEN",
        reg: "REGARDLESS",
      }
      ,
      help: {
        title: "Help",
        doc: "Documentation",
        faq: "FAQs",
        contact: "Contact"
      }
    },
    fr: {
      started: {
        start: "Prêt à commencer?",
        join: "Rejoignez-nous"
      },
      about: {
        title: "A propos",
        story: "Bio",
        project: "ZENIQ SAFIR",
        zhub: "ZENIQ Hub"
      },
      discover: {
        title: "Découvrir",
        zcoin: "ZENIQ Coin",
        zpay: "ZENIQ Pay",
        zexc: "ZENIQ Exchange",
        nomo: "Nomo"
      },
      projects: {
        title: "Projets",
        avinoc: "AVINOC",
        tdrone: "TDRONE",
        tupan: "TUPAN",
        sidi: "SIDI TOKEN",
        reg: "REGARDLESS",
      },
      help: {
        title: "Aide",
        doc: "Documentation",
        faq: "FAQs",
        contact: "Contact"
      }
    },
    ar: {
      started: {
        start: "هل أنت مستعد؟",
        join: "انظم الٱن"
      },
      about: {
        title: "عامة",
        story: "نبذة عني",
        project: "زينيك سفير",
        zhub: "ZENIQ Hub"
      },
      discover: {
        title: "اكتشف",
        zcoin: "عملة زينيك",
        zpay: "ZENIQ Pay",
        zexc: "ZENIQ Exchange",
        nomo: "Nomo"
      },
      projects: {
        title: "المشاريع",
        avinoc: "AVINOC",
        tdrone: "TDRONE",
        tupan: "TUPAN",
        sidi: "SIDI TOKEN",
        reg: "REGARDLESS",
      },
      help: {
        title: "التعليمات",
        doc: "الملفات",
        faq: "أسئلة و أجوبة",
        contact: "التواصل"
      }

    }

  }

  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const [langRoute, setLangRoute] = useState("")
  const [currentRoute, setCurrentRoute] = useState("")
  const [navBar, setNavBar] = useState(null)
  const [footer, setFooter] = useState(null)
  const [langList, setLangList] = useState(false)
  const [phone, setPhone] = useState(false)

  useEffect(() => {

    if (window.location.pathname.substring(0, 3) === "/fr") {
      lgRt = "/fr"
      nav = navBarTable.fr
      foot = footerTable.fr
    }
    else if (window.location.pathname.substring(0, 3) === "/ar") {
      lgRt = "/ar"
      document.querySelector("html").setAttribute("lang", "ar")
      document.documentElement.style.textAlign = "right";
      nav = navBarTable.ar
      foot = footerTable.ar

    }
    else {
      lgRt = "/en"
      nav = navBarTable.en
      foot = footerTable.en
    }

    if (window) {
      setPhone(window.innerWidth <= 440)
    }

    setLangRoute(lgRt)
    setNavBar(nav)
    setFooter(foot)
    setCurrentRoute(window.location.pathname)

  }, []);


  if (navBar === null) return null

  if (footer === null) return null


  return (
    <div>
      <nav ref={navbarRef} className="navbar menuopen">
        <div className='row phone:w-full phone:justify-between'>
          <Link href={`${langRoute}/home`} onClick={() => {
            setCurrentRoute(`${langRoute}/home`)
          }}>
            <svg id="Logo" class={`phone:w-[31.40096618357488vw] w-[8.541392904073588vw]`} viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7449 22V20.3806L46.0748 7.15918H36.9866V5.3222H48.5885V6.94164L39.2586 20.163H48.8302V22H36.7449ZM58.2474 22V5.3222H69.1242V7.15918H60.2777V12.3317H68.3991V14.1687H60.2777V20.163H69.1242V22H58.2474ZM78.547 22V5.3222H80.7949L89.5689 18.8578V5.3222H91.5992V22H89.3513L80.5773 8.4644V22H78.547ZM101.986 22V5.3222H104.016V22H101.986ZM114.16 18.3019V9.02032C114.16 6.55491 115.393 5.3222 117.858 5.3222H123.514C125.98 5.3222 127.212 6.55491 127.212 9.02032V18.3261C127.212 20.5659 126.157 21.7663 124.046 21.9275L125.69 25.1422L125.424 25.6256H123.708L121.871 22H117.858C115.393 22 114.16 20.7673 114.16 18.3019ZM116.19 18.5194C116.19 19.6152 116.738 20.163 117.834 20.163H123.538C124.634 20.163 125.182 19.6152 125.182 18.5194V8.80279C125.182 7.70705 124.634 7.15918 123.538 7.15918H117.834C116.738 7.15918 116.19 7.70705 116.19 8.80279V18.5194Z" fill="white" />
              <path d="M12.002 3.49837C11.8588 3.4987 11.7155 3.55213 11.6074 3.65844L6.31777 8.51114L7.78715 8.55357L12.0693 8.55156C12.3723 8.54095 11.7662 8.56217 12.0693 8.55156L16.1894 8.56194L17.522 8.53926L12.3971 3.65667C12.2886 3.55085 12.1453 3.49804 12.002 3.49837V3.49837ZM20.5319 11.5855L20.0446 11.5859L19.4851 14.9642C19.5713 15.0482 23.6804 15.2576 23.5945 15.342L12.1486 26.6024C12.0628 26.6869 11.932 26.6871 11.8457 26.603L4.58581 15.0334C4.52181 14.9314 4.50005 15.1178 4.58581 15.0334L4.01559 11.6047L3.52939 11.6054L0.161478 14.9187C-0.0546579 15.1314 -0.0536547 15.4802 0.163475 15.6918L11.603 26.8418C11.8201 27.0534 12.1763 27.0526 12.3925 26.84L23.8384 15.5799C24.0546 15.3672 24.0538 15.0182 23.8366 14.8066L20.5319 11.5855ZM16.0235 11.5908L15.5365 11.5912L19.2423 15.203C19.2717 15.2317 19.2718 15.2707 19.2424 15.2995L12.0839 22.341C12.0546 22.3698 12.0148 22.37 11.9854 22.3412L4.82991 15.3675C4.80049 15.3388 4.80033 15.2998 4.82976 15.271L8.56237 11.5994L4.01566 11.6047L4.58588 15.0334C4.42628 15.1904 10.8335 25.089 10.9938 25.2452L11.8458 26.603C12.0061 26.7593 11.989 26.7594 12.1486 26.6024L23.5945 15.342C23.7541 15.185 20.205 11.7422 20.0446 11.5859L16.0235 11.5908Z" fill="white" fill-opacity="0.95" />
            </svg>
          </Link>
          {!menuOpen
            ? <svg className="hidden phone:flex  w-[6.763285024154589vw]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
              setMenuOpen(true)
              navbarRef.current.classList.remove("menuopen")
            }}>
              <path d="M4.375 7H23.625M4.375 14H23.625M4.375 21H23.625" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            : <svg className="hidden phone:flex w-[4.3478260869565215vw]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
              setMenuOpen(false)
              navbarRef.current.classList.add("menuopen")
            }}>
              <path d="M9.00989 7.24034L15.6154 0.652747C16.1041 0.165169 16.8955 0.166086 17.3831 0.654797C17.8707 1.14351 17.8698 1.93497 17.3811 2.42257L10.7784 9.00736L17.3782 15.6016C17.8666 16.0895 17.8668 16.881 17.3789 17.3693C16.8909 17.8577 16.0994 17.8579 15.6111 17.37L9.00824 10.7727L2.40313 17.36C1.9144 17.8475 1.12295 17.8466 0.635355 17.3579C0.147757 16.8692 0.148695 16.0777 0.637406 15.5901L7.23971 9.00572L0.643851 2.41546C0.155511 1.92749 0.155238 1.13603 0.643206 0.647688C1.13118 0.159348 1.92264 0.159075 2.41098 0.647044L9.00987 7.24034H9.00989Z" fill="white" />
            </svg>}

        </div>
        <div className='phone:col phone:gap-[8.695652173913043vw] row gap-[2.3653088042049935vw] nav'>
          <Link href={`${langRoute}/home`} onClick={() => {
            setCurrentRoute(`${langRoute}/home`)
          }}>
            {navBar.home}
          </Link>
          <Link href={`${langRoute}/home/project`} scroll={false} onClick={() => {
            setCurrentRoute(`${langRoute}/home/project`)
            setTimeout(() => {
              top = getOffset(document.getElementById("zeniq safir")).top
              window.scrollTo({
                top: (top - 100),
                left: 0,
                behavior: 'smooth'
              })
            }, 0)
          }}>
            {navBar.project}
          </Link>
          <Link href={`${langRoute}/invest`} onClick={() => {
            setCurrentRoute(`${langRoute}/invest`)
          }}>
            {navBar.invest}
          </Link>
          <Link href={`${langRoute}/ecosystem`} onClick={() => {
            setCurrentRoute(`${langRoute}/ecosystem`)
          }}>
            {navBar.eco}
          </Link>
          <Link href={`${langRoute}/faq`} onClick={() => {
            setCurrentRoute(`${langRoute}/faq`)
          }}>
            {navBar.faq}
          </Link>
          <Link href={`${langRoute}/home/contact`} scroll={false} onClick={() => {
            setCurrentRoute(`${langRoute}/home/contact`)
            setTimeout(() => {
              top = getOffset(document.getElementById("contact")).top
              window.scrollTo({
                top: (top - 100),
                left: 0,
                behavior: 'smooth'
              })
            }, 0)
          }}>
            {navBar.contact}
          </Link>
        </div>
        <div className='relative h-full grid items-center ' onMouseLeave={() => setLangList(false)} onClick={() => {
          if (phone) {
            setLangList(!langList)
          }
        }}>
          <div className='row phone:gap-[4.830917874396135vw] gap-[0.7884362680683311vw] cursor-pointer' onMouseEnter={() => setLangList(true)} >
            <svg viewBox="0 0 19 20" className='phone:w-[6.280193236714976vw] w-[1.2483574244415243vw]' fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0.5C14.7472 0.5 19 4.75277 19 10C19 15.2472 14.7472 19.5 9.5 19.5C4.25277 19.5 0 15.2472 0 10C0 4.75277 4.25277 0.5 9.5 0.5ZM9.5 1.71277C7.828 1.71277 6.27162 2.20757 4.96991 3.05974C4.96426 3.44783 5.21894 3.76638 5.51323 3.70089C5.56255 3.68957 5.61026 3.67664 5.65877 3.66209L5.81723 3.60791L6.01532 3.52787L6.16085 3.46562C6.612 3.27238 6.84323 3.19719 7.15613 3.17536C7.72936 3.13574 8.25004 3.36294 8.80145 3.806C9.41106 4.29757 9.66413 4.75519 9.40298 5.34783C9.36584 5.4316 9.31917 5.51082 9.26392 5.58392L9.14506 5.73834C8.92677 6.01485 8.89523 6.09732 8.96962 6.22911C9.06502 6.40132 9.31323 6.4563 9.77247 6.43447L10.4678 6.38111C10.9125 6.35362 11.2464 6.37949 11.5722 6.4943C12.0514 6.66169 12.4673 6.97283 12.7631 7.38528C14.0131 9.11549 12.1891 11.4464 10.0449 11.8078C9.48464 11.9032 8.98579 11.8693 8.54111 11.6704C8.31957 11.5701 8.17404 11.4586 7.942 11.2257L7.68489 10.9646L7.56847 10.8578C7.51973 10.8157 7.46783 10.7773 7.41323 10.743C7.19008 10.6031 6.8683 10.5878 6.36136 10.6622L6.14387 10.6977L6.0234 10.722C5.94821 10.7406 5.92962 10.7584 5.92557 10.7867C5.91473 10.8627 5.91121 10.9396 5.91506 11.0163L5.94174 11.4432L5.9466 11.5645L5.99187 12.1741L5.9943 12.2355C6.0137 12.6511 5.97974 12.9632 5.85523 13.2332C5.63694 13.7086 5.14536 13.9835 4.57374 14.0337C4.02752 14.0766 3.4859 13.9062 3.06264 13.5583C2.80391 13.3472 2.2897 13.2882 2.13123 13.5073C2.10409 13.5451 2.07351 13.5803 2.03987 13.6124C2.78999 15.162 4.00417 16.4394 5.51368 17.2672C7.0232 18.095 8.75307 18.432 10.4629 18.2314C10.4556 18.225 10.4481 18.2188 10.4403 18.2129L9.91477 17.8272L9.86302 17.7868C9.75626 17.7051 9.65939 17.6112 9.57438 17.507C9.20004 17.03 9.04643 16.4155 9.1103 15.7695C9.22025 14.6934 9.80238 13.6351 10.6521 12.9745C11.1397 12.5986 11.6709 12.4029 12.198 12.4651C12.6475 12.5169 13.0009 12.7481 13.3105 13.1394L13.4342 13.3084L13.5806 13.5308C13.739 13.7677 13.7924 13.7951 13.9872 13.7135C14.2322 13.6116 14.4497 13.4386 14.7294 13.1394L15.0189 12.8144C16.0869 11.596 16.83 10.9872 17.7379 10.9007C17.7703 10.6056 17.7872 10.3048 17.7872 10C17.7872 5.42383 14.0762 1.71277 9.5 1.71277ZM17.4315 12.4094L17.3684 12.4417C17.0725 12.6058 16.754 12.8993 16.3529 13.3505L15.6762 14.1266L15.5145 14.3021L15.39 14.4258L15.314 14.4921L15.1474 14.6231C14.5354 15.0839 13.8934 15.2877 13.3016 15.0766C12.9685 14.9594 12.7785 14.784 12.5125 14.4072L12.2586 14.0401C12.2464 14.0233 12.234 14.0066 12.2214 13.99C12.0395 13.7563 11.7315 13.8396 11.3596 14.1946C10.9746 14.5631 10.6973 15.0296 10.5575 15.544C10.4112 16.0873 10.4912 16.5045 10.83 16.8335L10.965 16.9548L11.3127 17.2378C11.6304 17.4949 11.8414 17.6954 11.9821 17.9089C13.2687 17.5037 14.4372 16.7914 15.3867 15.8333C16.3362 14.8752 17.038 13.7003 17.4315 12.4102V12.4094ZM3.77898 4.0057L3.63991 4.14072C2.86933 4.90934 2.25822 5.82265 1.84169 6.82818C1.42516 7.8337 1.21143 8.91162 1.21277 10C1.21277 10.7713 1.31787 11.5184 1.51515 12.2266C1.93072 11.9275 2.43685 11.7302 2.82009 11.7925C3.10306 11.8386 3.28498 11.9396 3.55179 12.1676L3.686 12.2857C3.89379 12.4732 3.99162 12.5468 4.1226 12.601C4.28915 12.6689 4.48966 12.681 4.59153 12.6285L4.59719 12.6083L4.60285 12.5452V12.4951L4.598 12.3916L4.57294 12.1183L4.56162 11.8919L4.52766 11.4173L4.52038 11.2928C4.50098 10.8764 4.52604 10.5611 4.62468 10.2757C4.93191 9.38634 6.07677 9.11145 7.29034 9.27315C7.76817 9.33702 8.16353 9.53834 8.53787 9.88762L8.67694 10.0251C9.04077 10.4018 9.28009 10.5134 9.68919 10.4617C10.4896 10.363 11.248 9.83426 11.6434 9.10902C12.0072 8.43957 11.5197 7.78549 10.7314 7.75557L10.5737 7.75719L9.83957 7.79762C8.87421 7.83481 8.26298 7.65694 7.83123 7.0263C7.68396 6.80752 7.59056 6.55699 7.55866 6.2952C7.52676 6.03341 7.55727 5.76778 7.6477 5.52004C7.69864 5.38179 7.7617 5.27102 7.86357 5.13438L8.01153 4.94438L7.942 4.89102C7.56766 4.57975 7.28711 4.50375 6.91519 4.63553L6.71549 4.71153L6.41957 4.83443C6.00481 5.00664 5.74285 5.08506 5.42511 5.10528C4.71685 5.15055 4.08945 4.65898 3.77898 4.00489V4.0057Z" fill="white" />
            </svg>
            <span className='nav font-bold'>
              {langRoute.substring(1, 3).toUpperCase()}
            </span>
          </div>
          <div className={`${langList ? 'col' : 'hidden'} justify-center items-start phone:w-[35vw] w-[8.409986859395532vw] absolute phone:-ml-[6.5vw] -ml-[2vw] phone:top-[11vw] top-[5.913272010512484vw] bg-dark-green rounded-lg`}>
            <Link href={`/en/${currentRoute.substring(4)}`} className='language' onClick={() => {
              document.querySelector("html").setAttribute("lang", "en")
              document.documentElement.style.textAlign = "left";
              setLangRoute("/en")
              setCurrentRoute(`/en/${currentRoute.substring(4)}`)
              setNavBar(navBarTable.en)
              setFooter(footerTable.en)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
            }}>
              <img src={en.src} className='flag' />
              EN
            </Link>
            <Link href={`/fr/${currentRoute.substring(4)}`} className='language' onClick={() => {
              document.querySelector("html").setAttribute("lang", "fr")
              document.documentElement.style.textAlign = "left";
              setLangRoute("/fr")
              setCurrentRoute(`/fr/${currentRoute.substring(4)}`)
              setNavBar(navBarTable.fr)
              setFooter(footerTable.fr)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
            }}>
              <img src={fr.src} className='flag' />
              FR
            </Link>
            <Link href={`/ar/${currentRoute.substring(4)}`} className='language' onClick={() => {
              document.querySelector("html").setAttribute("lang", "ar")
              document.documentElement.style.textAlign = "right";
              setLangRoute("/ar")
              setCurrentRoute(`/ar/${currentRoute.substring(4)}`)
              setNavBar(navBarTable.ar)
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
              setFooter(footerTable.ar)
            }}>
              <img src={ar.src} className='flag' />
              AR
            </Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className='phone:mt-[25vw] mt-[7.5vw] w-full phone:h-[200vw] h-[40vw] border-t-medium-green border-t-[1px] col items-center justify-center divide-y divide-white/[.1]'>
        <div className='phone:col phone:gap-[20vw] phone:items-center row w-[80%] justify-between'>
          <div className='row phone:order-2 flex-wrap phone:gap-[10vw] justify-between phone:w-full w-[50%]'>
            <div className='col phone:gap-[3.5vw] gap-[1.5768725361366622vw]'>
              <h4>
                {footer.about.title}
              </h4>
              <div className='col gap-[1.0512483574244416vw]'>
                <Link href={`${langRoute}/home/me`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/home/me`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("me")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.about.story}
                </Link>
                <Link href={`${langRoute}/home/project`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/home/project`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("zeniq safir")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.about.project}
                </Link>
                <Link href={`${langRoute}/home/zeniqhub`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/home/zeniqhub`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("zeniq hub")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.about.zhub}
                </Link>
              </div>
            </div>
            <div className='col phone:gap-[3.5vw] gap-[1.5768725361366622vw]'>
              <h4>
                {footer.discover.title}
              </h4>
              <div className='col gap-[1.0512483574244416vw]'>
                <Link href={`${langRoute}/ecosystem/zcoin`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/services/zcoin`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("coin")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.discover.zcoin}
                </Link>
                <Link href={`${langRoute}/ecosystem/zpay`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/services/zpay`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("pay")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.discover.zpay}
                </Link>
                <Link href={`${langRoute}/ecosystem/zexc`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/services/zexc`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("exc")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.discover.zexc}
                </Link>
                <Link href={`${langRoute}/ecosystem/nomo`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/services/nomo`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("nomo")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.discover.nomo}
                </Link>
              </div>
            </div>
            <div className='col phone:gap-[3.5vw] gap-[1.5768725361366622vw]'>
              <h4>
                {footer.projects.title}
              </h4>
              <div className='col gap-[1.0512483574244416vw]'>
                <Link href={`${langRoute}/invest/avinoc`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/invest/avinoc`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("avinoc")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.projects.avinoc}
                </Link>
                <Link href={`${langRoute}/invest/tdrone`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/invest/tdrone`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("tdrone")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.projects.tdrone}
                </Link>
                <Link href={`${langRoute}/invest/tupan`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/invest/tupan`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("tupan")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.projects.tupan}
                </Link>
                <Link href={`${langRoute}/invest/sidi`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/invest/sidi`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("sidi")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.projects.sidi}
                </Link>
                <Link href={`${langRoute}/invest/regardless`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/invest/regardless`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("regardless")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.projects.reg}
                </Link>
              </div>
            </div>
            <div className='col phone:gap-[3.5vw] gap-[1.5768725361366622vw]'>
              <h4>
                {footer.help.title}
              </h4>
              <div className='col gap-[1.0512483574244416vw]'>
                <Link href={`${langRoute}/faq/documentation`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/faq/documentation`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("doc")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.help.doc}
                </Link>
                <Link href={`${langRoute}/faq`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/faq`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("faq")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.help.faq}
                </Link>
                <Link href={`${langRoute}/home/contact`} scroll={false} class="footerLink" onClick={() => {
                  setCurrentRoute(`${langRoute}/home/contact`)
                  setTimeout(() => {
                    top = getOffset(document.getElementById("contact")).top
                    window.scrollTo({
                      top: (top - 100),
                      left: 0,
                      behavior: 'smooth'
                    })
                  }, 0)
                }}>
                  {footer.help.contact}
                </Link>
              </div>
            </div>
          </div>
          <div className='col phone:gap-[8vw] gap-[2vw] items-center'>
            <h3>{footer.started.start}</h3>
            <a href="https://safir.com/ref/valkdmk5lf" target="_blank" className={`button`} rel="noreferrer" >
              {footer.started.join}
            </a>
          </div>
        </div>
      </footer>
    </div>

  )
}
