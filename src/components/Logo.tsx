import React from 'react'
import { useTranslation } from 'react-i18next'
import '../scss/section/logo.scss'

import logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom'

export const Logo = () => {
  const { t } = useTranslation()

  return (
    <div className="header__logo">
      <Link className="header__logo-link" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link className="header__logo-name" to="/">
        {t('logo')}
      </Link>
    </div>
  )
}
