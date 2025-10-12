import React from 'react'
import PackageHero from './PackageHero'
import PackageCard from  './PackageCard'
import DailyDeals from  './DailyDeals'
import SpecialPackages from './SpecialPackages'
import IntroSection from './IntroSection'
const PakageDetails = () => {
  return (
    <div>
      <PackageHero/>
      <IntroSection/>
      <PackageCard/>
      <SpecialPackages/>
      <DailyDeals/>
    </div>
  )
}

export default PakageDetails
