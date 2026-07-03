"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WHATSAPP_NUMBER = "5531989906507";

const whatsappLink = (text = "Olá! Gostaria de agendar uma avaliação.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const images = {
  // Imagens temporárias premium. Depois, troque por arquivos locais em /public quando tiver as fotos definitivas.
  hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=90",
  clinic: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=90",
  implant: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=90",
  smile: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=90",
};

const treatments = [
  {
    name: "implantes",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=90",
    description:
      "Solução moderna para recuperar dentes perdidos com segurança, estética e função mastigatória.",
    benefits: ["Planejamento personalizado", "Resultado natural", "Mais conforto para sorrir"],
  },
  {
    name: "Próteses",
    image: "https://images.unsplash.com/photo-1588776814546-ec7e0f2c3b0b?auto=format&fit=crop&w=1400&q=90",
    description:
      "Reabilitação oral para devolver harmonia, conforto e confiança ao sorriso.",
    benefits: ["Reposição dentária", "Estética renovada", "Mais qualidade de vida"],
  },
  {
    name: "Clareamento",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=90",
    description:
      "Tratamento estético para deixar o sorriso mais claro, bonito e harmônico.",
    benefits: ["Sorriso mais iluminado", "Procedimento seguro", "Resultado progressivo"],
  },
  {
    name: "Ortodontia",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=90",
    description:
      "Correção do alinhamento dos dentes para melhorar estética, mordida e saúde bucal.",
    benefits: ["Melhor alinhamento", "Mordida equilibrada", "Mais confiança"],
  },
  {
    name: "Estética dental",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=90",
    description:
      "Procedimentos pensados para valorizar a beleza natural do sorriso.",
    benefits: ["Harmonia facial", "Acabamento natural", "Planejamento estético"],
  },
  {
    name: "Clínica geral",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=90",
    description:
      "Cuidados preventivos e tratamentos essenciais para manter sua saúde bucal em dia.",
    benefits: ["Prevenção", "Limpeza", "Tratamentos restauradores"],
  },
];

const testimonials = [
  {
    name: "Bruna Souza",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=90",
    date: "4 meses atrás",
    text: "Sou suspeita para falar, desde o primeiro dia fui muito bem recebida. Os profissionais são excelentes. Amei tudo ❤️🦷",
    stars: 5,
  },
  {
    name: "Beatriz Lara",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=90",
    date: "4 meses atrás",
    text: "Uma experiência ótima. Adoro o atendimento e sou muito bem recebida. Super indico.",
    stars: 5,
  },
  {
    name: "Geralda Mirra",
    photo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=300&q=90",
    date: "4 meses atrás",
    text: "Da recepção até o atendimento com o Dr. Leonardo foi tudo perfeito. Muito satisfeita.",
    stars: 5,
  },
];

const clinicGallery = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=90",
    title: "Recepção acolhedora",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1800&q=90",
    title: "Consultórios modernos",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1800&q=90",
    title: "Ambiente confortável",
  },
  {
    src: "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=1800&q=90",
    title: "Equipamentos de qualidade",
  },
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1800&q=90",
    title: "Estrutura pensada para você",
  },
];

const team = [
  {
    name: "Dr. Leonardo",
    role: "Cirurgião-dentista",
    cro: "CRO-MG",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=90",
    description:
      "Atendimento cuidadoso, planejamento individualizado e foco em devolver segurança, função e estética ao sorriso.",
  },
  {
    name: "Dra. Especialista",
    role: "Odontologia estética",
    cro: "CRO-MG",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=90",
    description:
      "Tratamentos estéticos pensados para valorizar a naturalidade e a harmonia do sorriso.",
  },
  {
    name: "Equipe Implante Certo",
    role: "Atendimento clínico",
    cro: "Equipe multidisciplinar",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=90",
    description:
      "Profissionais preparados para oferecer uma experiência acolhedora do início ao fim.",
  },
];

export default function ImplanteCertoSite() {
  const [open, setOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [galleryIndex, setGalleryIndex] = useState(0);

React.useEffect(() => {
  const interval = setInterval(() => {
    setGalleryIndex((current) => (current + 1) % clinicGallery.length);
  }, 4200);

  return () => clearInterval(interval);
}, []);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.08]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f7f4] text-[#10233f]">
      <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/40 bg-white/85 px-4 py-2 shadow-xl shadow-black/5 backdrop-blur-xl md:px-5">
          <a href="#" className="flex min-w-0 items-center">
            <img
              src="/logo.png"
              alt="Implante Certo"
              className="h-16 max-w-[260px] object-contain md:h-20 md:max-w-[340px]"
            />
          </a>

          <nav className="hidden gap-7 text-[11px] font-bold uppercase tracking-[0.22em] md:flex">
            <a href="#sobre">Sobre</a>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            href={whatsappLink()}
            className="hidden rounded-full bg-[#10233f] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:inline-flex"
          >
            Agendar
          </a>
        </div>
      </header>

      <section className="relative min-h-[100svh] overflow-hidden">
        <motion.img
          src={images.hero}
          alt="Clínica Odontológica Implante Certo"
          style={{ scale: heroScale }}
          className="absolute inset-0 h-full w-full object-cover"

        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#071426]/70 via-[#071426]/35 to-[#071426]/85" />

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-12 pt-28 md:px-10 md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 border-l border-[#c9a84f] pl-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/75"
          >
            Clínica odontológica em Ibirité
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="max-w-5xl font-serif text-[13.5vw] uppercase leading-[0.86] tracking-[-0.09em] text-white sm:text-[12vw] md:text-[8vw]"
          >
            Sorrisos que mudam vidas.
          </motion.h1>

          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end">
            <p className="max-w-xl text-sm uppercase leading-7 tracking-[0.18em] text-white/72">
              Implantes · Próteses · Estética dental · Clínica geral · Atendimento humanizado
            </p>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a
                href={whatsappLink()}
                className="rounded-full bg-[#c9a84f] px-5 py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#10233f] md:px-6 md:py-4 md:text-[11px]"
              >
                Agendar avaliação
              </a>
              <a
                href="#sobre"
                className="rounded-full border border-white/35 bg-white/10 px-5 py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md md:px-6 md:py-4 md:text-[11px]"
              >
                Conhecer clínica
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="px-5 py-20 md:px-10 md:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 md:grid-cols-[0.85fr_1fr] md:items-end">
      <div>
        <p className="mb-6 border-l border-[#10233f]/40 pl-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#10233f]/60">
          Sobre a clínica
        </p>

        <h2 className="max-w-4xl font-serif text-[clamp(3rem,10vw,5.5rem)] uppercase leading-[0.88] tracking-[-0.075em] md:text-[clamp(4.5rem,5.4vw,7rem)]">
          Cuidado moderno para o seu sorriso.
        </h2>
      </div>

      <div>
        <p className="text-lg leading-9 text-[#10233f]/72">
          A Clínica Odontológica Implante Certo une atendimento humanizado,
          estrutura moderna e profissionais qualificados para oferecer tratamentos
          odontológicos com segurança, conforto e excelência.
        </p>

        <p className="mt-6 text-lg leading-9 text-[#10233f]/72">
          Localizada em Ibirité, a clínica se destaca pelo acolhimento,
          pela qualidade no atendimento e pela confiança construída com cada paciente.
        </p>
      </div>
    </div>

    <div className="mt-14 grid gap-5 md:grid-cols-[1fr_0.7fr]">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-[34px] bg-white shadow-2xl shadow-[#10233f]/8"
      >
        <img
          src={images.clinic}
          alt="Ambiente da Clínica Implante Certo"
          className="h-[340px] w-full object-cover md:h-[520px]"

        />
      </motion.div>

      <div className="grid gap-4">
        {[
          ["5.0", "avaliação no Google"],
          ["40+", "avaliações reais"],
          ["Ibirité", "atendimento local"],
          ["Humanizado", "do início ao fim"],
        ].map(([number, label]) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[24px] border border-[#10233f]/10 bg-white p-4 shadow-xl shadow-[#10233f]/5"
          >
            <p className="font-serif text-4xl leading-none tracking-[-0.07em] text-[#10233f]">
              {number}
            </p>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#10233f]/55">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section id="tratamentos" className="bg-[#10233f] px-5 py-20 text-white md:px-10 md:py-24">
  <div className="mx-auto max-w-7xl">
    <p className="mb-6 border-l border-[#c9a84f] pl-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
      Especialidades
    </p>

    <div className="grid gap-10 md:grid-cols-[0.8fr_1fr] md:items-end">
      <h2 className="max-w-4xl font-serif text-[clamp(3rem,10vw,5.5rem)] uppercase leading-[0.88] tracking-[-0.075em] md:text-[clamp(4.5rem,5.4vw,7rem)]">
        Tratamentos para o seu sorriso.
      </h2>

      <p className="max-w-xl text-sm uppercase leading-7 tracking-[0.18em] text-white/62">
        Escolha uma especialidade para conhecer melhor o tratamento e agendar sua avaliação.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-[0.95fr_0.95fr] md:items-start">
      <div className="divide-y divide-white/15 border-y border-white/15">
        {treatments.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setSelectedTreatment(item)}
            className={`grid w-full grid-cols-[0.18fr_1fr] gap-5 py-5 text-left transition duration-300 ${
              selectedTreatment.name === item.name
                ? "text-[#c9a84f]"
                : "text-white hover:text-[#c9a84f]"
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-45">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="font-serif text-[clamp(2.2rem,8vw,4rem)] uppercase leading-[0.9] tracking-[-0.06em] md:text-[clamp(3rem,3.25vw,4.5rem)]">
              {item.name}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        key={selectedTreatment.name}
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-[36px] border border-white/15 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-md"
      >
        <div className="relative h-[260px] overflow-hidden bg-white/10 md:h-[390px]">
          <img
            src={selectedTreatment.image}
            alt={selectedTreatment.name}
            className="h-full w-full object-cover"

          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/70 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/60">
              Especialidade
            </p>

            <h3 className="mt-2 font-serif text-4xl uppercase leading-none tracking-[-0.07em] text-white md:text-5xl">
              {selectedTreatment.name}
            </h3>
          </div>
        </div>

        <div className="p-5 md:p-6">
          <p className="text-base leading-8 text-white/72">
            {selectedTreatment.description}
          </p>

          <div className="mt-6 grid gap-3">
            {selectedTreatment.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-full border border-white/15 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white/80"
              >
                {benefit}
              </div>
            ))}
          </div>

          <a
            href={whatsappLink(`Olá! Gostaria de agendar uma avaliação para ${selectedTreatment.name}.`)}
            className="mt-6 inline-flex rounded-full bg-[#c9a84f] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#10233f] transition hover:bg-white"
          >
            Agendar avaliação
          </a>
        </div>
      </motion.div>
    </div>
  </div>
</section>

<section id="galeria" className="bg-[#f8f7f4] px-5 py-20 md:px-10 md:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-10 md:grid-cols-[0.95fr_0.95fr] md:items-end">
      <div>
        <p className="mb-6 border-l border-[#10233f]/40 pl-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#10233f]/60">
          Clínica
        </p>

        <h2 className="max-w-4xl font-serif text-[clamp(3rem,10vw,5.5rem)] uppercase leading-[0.88] tracking-[-0.075em] md:text-[clamp(4.5rem,5.4vw,7rem)]">
          Um espaço pensado para cuidar de você.
        </h2>
      </div>

      <p className="max-w-xl text-base leading-8 text-[#10233f]/70">
        Ambientes planejados para proporcionar conforto, segurança e tranquilidade durante cada etapa do atendimento.
      </p>
    </div>

    <motion.div
      key={clinicGallery[galleryIndex].src}
      initial={{ opacity: 0, scale: 1.015, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-14 overflow-hidden rounded-[38px] bg-[#10233f] shadow-2xl shadow-[#10233f]/15"
    >
      <img
        src={clinicGallery[galleryIndex].src}
        alt={clinicGallery[galleryIndex].title}
        className="h-[320px] w-full object-cover md:h-[560px]"

      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/75 via-transparent to-transparent" />

      <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/55">
            {String(galleryIndex + 1).padStart(2, "0")} / {String(clinicGallery.length).padStart(2, "0")}
          </p>

          <h3 className="mt-2 font-serif text-4xl uppercase leading-none tracking-[-0.07em] text-white md:text-5xl">
            {clinicGallery[galleryIndex].title}
          </h3>
        </div>

        <div className="flex gap-2">
          {clinicGallery.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setGalleryIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                galleryIndex === index
                  ? "w-10 bg-[#c9a84f]"
                  : "w-2.5 bg-white/45"
              }`}
              aria-label={`Ver imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>

<section id="avaliacoes" className="bg-[#faf9f7] px-5 py-20 md:px-10 md:py-24">

<div className="mx-auto max-w-7xl">

<p className="mb-6 border-l border-[#10233f]/40 pl-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#10233f]/60">

Avaliações

</p>

<h2 className="max-w-4xl font-serif text-[clamp(3rem,10vw,5.5rem)] uppercase leading-[0.88] tracking-[-0.075em] md:text-[clamp(4.5rem,5.4vw,7rem)]">

Quem conhece,
recomenda.

</h2>

<div className="mt-16 grid gap-6 md:grid-cols-3">

{testimonials.map((item,index)=>(

<motion.div

key={item.name}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{

duration:0.7,

delay:index*0.12,

ease:[0.22,1,0.36,1]

}}

whileHover={{

y:-8

}}

className="rounded-[34px] bg-white p-7 shadow-xl shadow-[#10233f]/8"

>

<div className="flex items-center justify-between">

<div className="flex items-center gap-4">

<img

src={item.photo}

className="h-14 w-14 rounded-full object-cover"

/>

<div>

<p className="font-semibold text-[#10233f]">

{item.name}

</p>

<p className="text-xs text-[#10233f]/50">

{item.date}

</p>

</div>

</div>

<span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold shadow-sm">
  <span className="text-[#4285F4]">G</span>
</span>
</div>

<div className="mt-6 flex gap-1"> {"★★★★★".split("").map((s,i)=>( <span key={i} className="text-[#F6B800] text-lg">
   ★
   </span>))}
  </div>
<p className="mt-5 leading-8 text-[#10233f]/72"> {item.text} </p> </motion.div>))}

 </div>
<div className="mt-14 flex justify-center">

<a href="https://www.google.com/search?q=Implante+Certo+Ibirité" target="_blank" className="rounded-full bg-[#10233f] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#c9a84f] hover:text-[#10233f]">

  Ver todas as avaliações </a>

  </div>
 </div>
</section>

<section id="equipe" className="bg-[#10233f] px-5 py-20 text-white md:px-10 md:py-24">
  <div className="mx-auto max-w-7xl">
    <p className="mb-6 border-l border-[#c9a84f] pl-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
      Equipe
    </p>

    <div className="grid gap-10 md:grid-cols-[0.8fr_1fr] md:items-end">
      <h2 className="max-w-4xl font-serif text-[clamp(3rem,10vw,5.5rem)] uppercase leading-[0.88] tracking-[-0.075em] md:text-[clamp(4.5rem,5.4vw,7rem)]">
        Cuidado em cada detalhe.
      </h2>

      <p className="max-w-xl text-sm uppercase leading-7 tracking-[0.18em] text-white/62">
        Uma equipe preparada para oferecer atendimento humanizado, segurança e clareza em todas as etapas do tratamento.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {team.map((member, index) => (
        <motion.article
          key={member.name}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -8 }}
          className="group overflow-hidden rounded-[30px] border border-white/15 bg-white/10 shadow-2xl shadow-black/15 backdrop-blur-md"
        >
          <div className="relative h-[340px] overflow-hidden bg-white/10 md:h-[380px]">
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              onError={(event) => {
                event.currentTarget.src = "/clinica1.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/78 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a84f]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-4xl leading-none tracking-[-0.07em] text-white">
                {member.name}
              </h3>
            </div>
          </div>

          <div className="p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">
              {member.role}
            </p>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84f]">
              {member.cro}
            </p>

            <p className="mt-5 leading-8 text-white/70">
              {member.description}
            </p>

            <a
              href={whatsappLink(`Olá! Gostaria de agendar uma avaliação com ${member.name}.`)}
              className="mt-6 inline-flex rounded-full border border-white/25 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#10233f]"
            >
              Agendar avaliação
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
  <section id="contato" className="bg-[#f0ece5] px-5 py-20 md:px-10 md:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1fr] md:items-end">
        <div>
          <p className="mb-6 border-l border-[#10233f]/40 pl-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#10233f]/60">
            Localização
          </p>

        <h2 className="max-w-4xl font-serif text-[clamp(3rem,10vw,5.5rem)] uppercase leading-[0.88] tracking-[-0.075em] md:text-[clamp(4.5rem,5.4vw,7rem)]">
          Fácil de encontrar. Pronto para te receber.
        </h2>
      </div>

      <div className="max-w-2xl space-y-4 text-sm leading-7 text-[#10233f]/70 md:text-base md:leading-8">
        <p>
          A Clínica Odontológica Implante Certo está localizada em Ibirité,
          com fácil acesso e atendimento em horário comercial.
        </p>

        <p>
          Av. São Paulo, 4437 - Jaçanã, Ibirité - MG, 32415-283
        </p>
      </div>
    </div>

    <div className="mt-8 grid gap-5 md:grid-cols-[1fr_0.65fr]">
      <div className="overflow-hidden rounded-[38px] border border-[#10233f]/10 bg-white shadow-2xl shadow-[#10233f]/10">
        <iframe
          title="Mapa Clínica Implante Certo"
          src="https://www.google.com/maps?q=Av.%20S%C3%A3o%20Paulo%2C%204437%20-%20Ja%C3%A7an%C3%A3%2C%20Ibirit%C3%A9%20-%20MG&output=embed"
          className="h-[260px] w-full md:h-[430px]"
          loading="lazy"
        />
      </div>

      <div className="grid gap-4">
        {[
          ["Endereço", "Av. São Paulo, 4437 - Jaçanã, Ibirité - MG"],
          ["Telefone", "(31) 98990-6507"],
          ["Horário", "Aberto até 18:00"],
          ["Avaliação", "5,0 no Google"],
        ].map(([label, value]) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[24px] border border-[#10233f]/10 bg-white p-4 shadow-xl shadow-[#10233f]/5"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#10233f]/45">
              {label}
            </p>

            <p className="mt-2 text-sm font-semibold leading-6 text-[#10233f] md:text-lg md:leading-7">
              {value}
            </p>
          </motion.div>
        ))}

        <a
          href={whatsappLink()}
          className="mt-2 rounded-full bg-[#10233f] px-7 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#c9a84f] hover:text-[#10233f]"
        >
          Agendar pelo WhatsApp
        </a>

        <a
          href="https://www.google.com/maps?q=Av.%20S%C3%A3o%20Paulo%2C%204437%20-%20Ja%C3%A7an%C3%A3%2C%20Ibirit%C3%A9%20-%20MG"
          target="_blank"
          className="rounded-full border border-[#10233f]/20 px-7 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#10233f] transition hover:bg-[#10233f] hover:text-white"
        >
          Abrir no Google Maps
          </a>
        </div>
       </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#071426] px-5 py-24 text-white md:px-10 md:py-32">

  <div className="absolute inset-0 opacity-[0.08]">
    <img
      src={images.hero}
      className="h-full w-full object-cover"
      alt=""
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-b from-[#071426]/85 via-[#071426]/92 to-[#071426]" />

  <div className="relative z-10 mx-auto max-w-7xl">

    <motion.div

      initial={{opacity:0,y:40}}

      whileInView={{opacity:1,y:0}}

      viewport={{once:true}}

      transition={{duration:0.8}}

    >

      <p className="mb-7 border-l border-[#c9a84f] pl-4 text-[11px] font-bold uppercase tracking-[0.26em] text-white/60">

        Agendamento

      </p>

      <h2 className="max-w-4xl font-serif text-[clamp(3.4rem,11vw,6rem)] uppercase leading-[0.86] tracking-[-0.08em] text-white md:text-[clamp(5rem,6vw,8rem)]">

        Seu novo
        sorriso
        começa hoje.

      </h2>

    </motion.div>

    <motion.p

      initial={{opacity:0,y:30}}

      whileInView={{opacity:1,y:0}}

      transition={{delay:0.12,duration:0.8}}

      className="mt-8 max-w-2xl text-base leading-8 text-white/72 md:text-lg md:leading-9"

    >

      Estamos preparados para oferecer um atendimento acolhedor,
      tecnologia moderna e um planejamento personalizado para transformar
      seu sorriso com segurança e excelência.

    </motion.p>

    <motion.div

      initial={{opacity:0,y:30}}

      whileInView={{opacity:1,y:0}}

      transition={{delay:0.24,duration:0.8}}

      className="mt-10 flex flex-col gap-4 md:flex-row"

    >

      <a

        href={whatsappLink()}

        className="rounded-full bg-[#c9a84f] px-8 py-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#10233f] transition duration-300 hover:scale-[1.02] hover:bg-white"

      >

        Agendar avaliação

      </a>

      <a

        href="tel:+5531989906507"

        className="rounded-full border border-white/20 bg-white/5 px-8 py-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-[#10233f]"

      >

        Ligar agora

      </a>

    </motion.div>

  </div>

</section>

<footer className="bg-[#071426] px-5 pb-12 pt-10 text-white md:px-10">

<div className="mx-auto max-w-7xl">

<div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-4">

<div>

<img

src="/logo.png"

alt="Implante Certo"

className="h-20 w-auto brightness-0 invert"

/>

<p className="mt-6 text-sm leading-8 text-white/60">

Atendimento odontológico moderno,
humanizado e pensado para devolver
confiança ao seu sorriso.

</p>

</div>

<div>

<p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/45">

Clínica

</p>

<div className="space-y-3 text-white/70">

<p>Sobre</p>

<p>Equipe</p>

<p>Especialidades</p>

<p>Avaliações</p>

</div>

</div>

<div>

<p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/45">

Contato

</p>

<div className="space-y-3 text-white/70">

<p>(31) 98990-6507</p>

<p>Ibirité • MG</p>

<p>Segunda à Sexta</p>

<p>08h às 18h</p>

</div>

</div>

<div>

<p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/45">

Redes

</p>

<div className="space-y-3 text-white/70">

<a href="#">Instagram</a>

<a href="#">WhatsApp</a>

<a href="#">Google Maps</a>

</div>

</div>

</div>

<div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.18em] text-white/35 md:flex-row md:justify-between">

<p>

© 2026 Clínica Odontológica Implante Certo.

</p>

<p>

Desenvolvido por Eleve Digital

</p>

</div>

</div>

</footer>
  </main>
  );
}