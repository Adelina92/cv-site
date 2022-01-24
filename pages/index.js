import Head from 'next/head'
import PresentationBlock from '../src/pages/index/PresentationBlock'
import SkillsBlock from '../src/pages/index/SkillsBlock'
import RecordBlock from '../src/pages/index/RecordBlock'
import PortfolioBlock from '../src/pages/index/PortfolioBlock'
import ContactForm from '../src/pages/index/ContactForm/ContactForm'
import Footer from '../src/pages/common/Footer'

export default function Home() {
  return (
    <>
    <Head>
      <title>Index page</title>
    </Head>
    <PresentationBlock/>
    <SkillsBlock/>
    <RecordBlock/>
    <PortfolioBlock/>
    <ContactForm/>
    <Footer/>
    </>
  )
}
