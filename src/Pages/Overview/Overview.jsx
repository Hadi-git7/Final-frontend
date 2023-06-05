import React, { useEffect, useState } from 'react';
import './Overview.css';
import tryy from './try.png';
import graph from './ds-graph.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import Aos from 'aos';
import Loader from '../Loader/Loader'


function Overview() {

  const [loading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
    setIsLoading(false)
    },3000)
  })

  useEffect(() => {
    Aos.init();
  }, [])

  if(loading){
    return <Loader/>
  }
  return (
    <>
      <div className='overview-container'>
        <div className="hero-overview-container">
          <div className="hero-overview-image">
            <img src={tryy} alt='brain' />
          </div>
          <div className="hero-overview-content">
            <h2 className='hero-overview-content-h2'>What is Dravet Syndrome?</h2>
            <p className='hero-overview-content-p'>Dravet syndrome is an intractable developmental and epileptic encephalopathy that begins in infancy and proceeds with accumulating morbidity that significantly impacts individuals throughout their lifetime.
              Dravet syndrome is a rare disease, with an estimated incidence rate of 1:15,700, with the majority of patients carrying a mutation in the sodium channel gene SCN1A.</p>
          </div>
        </div>
        <div className="info-content">
          <div className="dravet-definition">
            <p className='dravet-definition-title-small'>What is Dravet Syndrome?</p>
            <h3 className='dravet-definition-title-big'>Dravet Syndrome is More than Seizures</h3>
            <div className="crsl-wrpr">
              <p className='dravet-definition-text slide-raoul raoul'>Dravet syndrome, previously known as Severe Myoclonic Epilepsy of Infancy (SMEI), is an intractable developmental and epileptic encephalopathy that begins in infancy and proceeds with accumulating morbidity that significantly impacts individuals throughout their lifetime. Dravet syndrome is a rare disease, with an estimated incidence rate of 1:15,700, with the majority of patients carrying a mutation in the sodium channel gene SCN1A [1].</p>
              <p className='dravet-definition-text slide-raoul raoul'>Dravet syndrome is classified as a developmental and epileptic encephalopathy (also known as a DEE), which is part of a group of severe epilepsies with frequent and difficult to treat seizures and significant developmental delays. Seizures in Dravet syndrome usually begin during the first 2-15 months of life, often in the presence of fever or warm temperatures.</p> 
              <p  className='dravet-definition-text slide-raoul raoul'>Seizures are frequently prolonged, and are not well managed with current medications. Patients present with a variety of seizure types that generally evolve with age.<span className='bold-text'> As with all developmental and epileptic encephalopathies, Dravet syndrome includes more than just difficult to control seizures.</span> Other comorbidities such as developmental delay and abnormal EEGs often emerge during the second or third year of life. Common issues associated with Dravet syndrome include:</p>
              <ul className='light-text lists slide-raoul raoul'>
                <li>Prolonged seizures</li>
                <li>Frequent seizures</li>
                <li>Behavioral and developmental delays</li>
                <li>Movement and balance issues</li>
                <li>Orthopedic conditions</li>
                <li>Delayed language and speech issues</li>
                <li>Growth and nutrition issues</li>
                <li>Sleeping difficulties</li>
                <li>Chronic infections</li>
                <li>Sensory integration disorders</li>
                <li>Dysautonomia, or disruptions of the autonomic nervous system which can lead to difficulty regulating body temperature, heart rate, blood pressure, and other issues</li>
              </ul>
              <p className='dravet-definition-text slide-raoul raoul'>Current <span className='orange-span'> treatment </span>options are limited, and the constant care required for someone suffering from Dravet syndrome can severely impact the patient’s and the family’s quality of life. Patients with Dravet syndrome face a 15-20% mortality rate due to SUDEP (Sudden Unexpected Death in Epilepsy), prolonged seizures, seizure-related accidents such as drowning, and infections [2,3]. Research for improved treatments, particularly disease-modifying treatments, offers patients and families hope for a better quality of life for their loved one
              </p>
            </div>
          </div>
          <div className="diagnosis">
            <h3 className='diagnosis-title-h3'>Diagnosis & Genetic Testing</h3>
            <h4 className='diagnosis-title-h4'>DIAGNOSIS</h4>
            <p className='diagnosis-paragraph'>Dravet syndrome is a clinical diagnosis that affects 1:15,700 infants born in the US [1].
              Over 80% of those diagnosed with Dravet syndrome have an SCN1A mutation (1:20,900),
              but the presence of a mutation alone is not sufficient for diagnosis, nor does the absence of a mutation exclude the diagnosis.
              Mutations in SCN1A can lead to a spectrum of disorders ranging from migraines, childhood epilepsy, or more severe and life-long epilepsy syndromes.
              Dravet syndrome lies at the more severe end of the spectrum of SCN1A-related disorders.
              Dravet syndrome can more rarely be associated with mutations in genes other than SCN1A [4,5].</p>
          </div>
          <div className="diagnosis-graph"><img src={graph} alt='graph' /></div>
          <div className="below-diagnosis">
            <p className='light-text'>Clinical diagnostic criteria include at least 4 of the following:</p>
            <ul className='light-text lists'>
              <li> Normal or near-normal cognitive and motor development before seizure onset </li>
              <li>Two or more seizures with or without fever before 1 year of age</li>
              <li>Seizure history consisting of myoclonic, hemiclonic, or generalized tonic-clonic seizures</li>
              <li>Two or more seizures lasting longer than 10 minutes</li>
              <li>Failure to respond to first-line antiepileptic drug therapy with continued seizures after 2 years of age</li>
            </ul>
            <p className='light-text'>Other earmarks of the syndrome include seizures associated with vaccinations, fever, hot baths, or warm temperatures; developmental slowing, stagnation, or regression after the first year of life; behavioral issues; and speech delay.</p>
          </div>
          <div className="genetic-testing-container">
            <h4 className='genetic-testing-title'>GENETIC TESTING</h4>
            <div className="crsl-wrpr">

              <p className='light-text genetic-testing-text slide-raoul raoul' >Because many of these criteria are not apparent in the first year of life and infants with Dravet syndrome initially experience typical development,<span className='bold-text'> genetic testing via an epilepsy panel should be considered in patients exhibiting any of the following:</span> </p>
              <ul className='light-text lists slide-raoul raoul'>
                <li>2 or more prolonged seizures by 1 year of age</li>
                <li>1 prolonged seizure and any hemi-clonic (sustained, rhythmic jerking of one side of the body) seizure by 1 year of age</li>
                <li>2 seizures of any length that seem to affect alternating sides of the body</li>
                <li>History of seizures prior to 18 months of age and later emergence of myoclonic and/or absence seizures</li>
              </ul>
              <p className='light-text genetic-testing-text slide-raoul raoul'>If you suspect your loved one might have Dravet syndrome, ask your neurologist about testing, which is available through your doctor or commercially. An epilepsy panel will test for SCN1A as well as many other genes commonly associated with epilepsy. Following testing, consultation with a genetic counselor is recommended. Genetic testing is recommended in patients of ALL ages, including in adults with a suspected diagnosis but for whom a detailed history of presentation in infancy may be limited.</p>
              <p className='light-text genetic-testing-text slide-raoul raoul'>While simple SCN1A sequencing is appropriate when all clinical criteria are met, an epilepsy gene panel is the expert preference for children with suspected DS.
                Invitae’s Behind the Seizure Program provides no-charge genetic testing (epilepsy panel) for patients in the US under the age of 8 years that have experienced at least one unprovoked seizure. Another company, Probably Genetic offers no-cost genetic testing (whole exome sequencing) for pediatric-onset epilepsy.</p>
              <p className='light-text genetic-testing-text slide-raoul raoul'>Dravet syndrome presents differently in each patient. Individuals with Dravet syndrome are often misdiagnosed with another seizure disorder such as Lennox Gastaut or Myoclonic Astatic Epilepsy, or given a broad diagnosis of intractable epilepsy. Some epilepsy syndromes, like PCDH19, a rare x-linked epilepsy found more often in females than males, share many characteristics with Dravet syndrome. There are subtle differences between these epilepsy syndromes and Dravet, and you should consult with your child’s neurologist if you have any questions about related epilepsies.</p>
            </div>
            <div className="refernces">
              <p className='light-text'>References</p>
              <ol className='light-text'>
                <li>Wu, E., et. al. (2015). Incidence of Dravet Syndrome in a US Population. Pediatrics 136(5): 1310-e1315. doi: 10.1542/peds.2015-1807. </li>
                <li>Cooper, M.S., et. al. (2016). Mortality in Dravet Syndrome. Epilepsy Research 128:42-47. doi: 10.1016/j.eplepsyres.2016.10.006.</li>
                <li>Skluzacek, et. al. (2011). Dravet syndrome and parent associations: The IDEA League experience with comorbid conditions, mortality, management, adaptation, and grief. Epilepsia 52 Suppl 2:95-101. doi: 10.1111/j.1528-1167.2011.03012.x.</li>
                <li>Ian O Miller, MD, Marcio A Sotero de Menezes, MD. SCN1A-Related Seizure Disorders. Gene Reviews. </li>
                <li>Silberstein, S.D., Dodick, D.W. (2013). Migraine genetics: Part II.2013 Sep;53(8):1218-29. doi: 10.1111/head.12169.</li>
              </ol>
            </div>

          </div>

        </div>
      </div>






    </>)
}

export default Overview