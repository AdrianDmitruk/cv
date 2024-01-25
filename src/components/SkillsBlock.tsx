import React from 'react'
import { useTranslation } from 'react-i18next'
import '../scss/section/skillsblock.scss'

export const SkillsBlock = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="skills__box-card">HTML | CSS | SASS</div>
      <div className="skills__box-card">JavaScript | TypeScript</div>
      <div className="skills__box-card">React | Redux Toolkit</div>
      <div className="skills__box-card">React Hooks</div>
      <div className="skills__box-card">React-Router-Dom</div>
      <div className="skills__box-card">Axios | Rest API</div>
      <div className="skills__box-card">Material-UI</div>
      <div className="skills__box-card">GIT</div>
      <div className="skills__box-card">Gulp | Webpack</div>
      <div className="skills__box-card">{t('skillsname')}</div>
    </>
  )
}
