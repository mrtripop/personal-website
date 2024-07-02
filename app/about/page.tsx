'use client'
import React from 'react'
import Image from 'next/image'
import Button from '@components/Button/Button'
import ExperienceCard from '@components/Card/ExperienceCard'
import ContactCard from '@components/Card/ContactCard'
import ImageButton from '@components/Button/IconsButton'
import { images } from '@assets'
import {
  contacts,
  experiences,
  follows,
  programmingSkillLogo,
} from '@data/home'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="w-full">
      {/* hero div */}
      <div id="about" className="bg-dark-blue ">
        <div className="container flex justify-between h-[1021px] ">
          <div className="flex-1 overflow-hidden ">
            <img
              src={images.PersonalImage.src}
              alt="mrtripop-personal-image"
              className="h-full w-fit pt-[64px]"
            />
          </div>
          <div className="flex items-center justify-center flex-1">
            <div className="w-[630px] h-[475px] flex flex-col justify-around ">
              <h1 className="text-[64px] leading-[77px] drop-shadow-lg text-white ">
                Tripop Torcheep
              </h1>
              <p className="text-2xl leading-10 tracking-widest text-white">
                I’m interested in knowledge, how software go live to service
                customer? So, Software Engineer can give answer since the
                design, develop, deploy and maintenance service.
              </p>
              <Button text="resume" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>

      {/* graduate div */}
      <div id="graduate" className="bg-dim-white">
        <div className="flex container h-[464px] justify-around">
          <div className="w-[570px] flex flex-col gap-5 justify-center">
            <h2 className="text-5xl font-normal ">Graduated</h2>
            <p className="text-2xl font-light ">
              Graduated in bachelor degree in Computer Engineering at Naresuan
              University with 2.83 GPA
            </p>
          </div>
          <div className="flex items-center">
            <img
              src={images.UniversityImage.src}
              alt="mrtripop-university-image"
            />
          </div>
        </div>
      </div>

      {/* programming skill div */}
      <div id="skill" className="bg-dark-blue ">
        <div className="container flex justify-between py-16 ">
          <div className="flex flex-col w-full gap-[80px] ">
            <h2 className="text-5xl font-medium text-white text-center tracking-[0.08em]">
              Programming Skills
            </h2>
            <div className="flex flex-row gap-[39px] align-center justify-center">
              {programmingSkillLogo.map((logo, index) => (
                <img
                  key={'mrtripop-skill-experience-' + index}
                  width={160}
                  height={160}
                  src={logo.src}
                  alt="mrtripop-skill-experience"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* experience div */}
      <div id="experience" className="bg-dim-white">
        <div className="container flex flex-col h-full gap-16 py-16">
          <h2 className="text-5xl font-medium text-dark-blue text-center tracking-[0.08em]">
            Experience
          </h2>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              isImageLeft={index % 2 !== 0}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
              onClick={experience.onClick}
              src={experience.src}
              alt={experience.alt}
            />
          ))}
        </div>
      </div>

      {/* contact div */}
      <div id="contact" className="bg-dark-blue ">
        <div className="container flex items-center justify-between h-[778px]">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact.contact}
              textButton={contact.textButton}
              src={contact.src}
              onClick={contact.onClick}
            />
          ))}
        </div>
      </div>

      {/* follow div */}
      <div id="follow" className="bg-dim-white">
        <div className="container h-[500px] gap-10 flex flex-col items-center tracking-[0.08em] py-14 ">
          <h1 className="text-5xl text-dark-blue">Follow me</h1>
          <div className="flex items-center justify-center w-full h-full gap-60">
            {follows.map((follow, index) => (
              <ImageButton
                alt={follow.alt}
                key={index}
                src={follow.src}
                // onClick={follow.onClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
