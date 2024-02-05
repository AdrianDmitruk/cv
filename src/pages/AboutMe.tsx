import { useTranslation } from "react-i18next"
import "../scss/section/aboutpage.scss"

import { FC } from "react"
import { SkillsBlock } from "../components"

const AboutMe: FC = () => {
	const { t } = useTranslation()
	return (
		<section className='about-page'>
			<div className='container'>
				<h3 className='about-page__title page-title'>
					<span>/</span>
					{t("about")}
				</h3>
				<div className='about-page__wrpa'>
					<div className='about-page__wrpa-left'>
						<p className='about-page__left-text'>{t("abouttext")}</p>
						<p className='about-page__left-text'>{t("abouttextsec")}</p>
					</div>
					{/* <img className='about-page__wrpa-right' src={dmitruk} alt='dmitruk' /> */}
				</div>
				<div className='about-page__skills'>
					<h3 className='about-page__skills-title'>
						<span>#</span>
						{t("skills")}
					</h3>
					<div className='about-page__skills-content'>
						<SkillsBlock />
					</div>
				</div>
				<div className='about-page__fact'>
					{/* <h3 className='about-page__fact-title'>
						<span>#</span>
						{t("fun")}
					</h3> */}
					{/* <div className="about-page__fact-card">
            <div className="about-page__card-box">{t("facts")}</div>
            <div className="about-page__card-box">{t("factss")}</div>
            <div className="about-page__card-box">{t("factsss")}</div>
            <div className="about-page__card-box">{t("factssss")}</div>
            <div className="about-page__card-box">{t("factsg")}</div>
            <div className="about-page__card-box">{t("factsgg")}</div>
            <div className="about-page__card-box">{t("factsggg")}</div>
          </div> */}
				</div>
			</div>
		</section>
	)
}

export default AboutMe
