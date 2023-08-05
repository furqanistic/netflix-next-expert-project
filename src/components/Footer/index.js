import React from 'react'
import styles from './styles.module.scss'
import { TiSocialInstagram } from 'react-icons/ti'
import { ImTwitter, ImYoutube } from 'react-icons/im'
import { RiFacebookBoxFill } from 'react-icons/ri'

export default () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.icons}>
          <RiFacebookBoxFill />
          <TiSocialInstagram />
          <ImTwitter />
          <ImYoutube />
        </div>
        <ul className={styles.details}>
          <li>Language and Subtitles</li>
          <li>Audio </li>
          <li>Help Center</li>
          <li>Prepaid Card</li>
          <li>Press</li>
          <li>Investor Relations</li>
          <li>Careers</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie </li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <div className={styles.security}>
          <div>Service Code</div>
          <span>© 1997-2021 Furqan, Inc.</span>
        </div>
      </div>
    </footer>
  )
}
