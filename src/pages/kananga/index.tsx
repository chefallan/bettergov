import { FC } from 'react';
import { Flame, Landmark, MapPin, Users } from 'lucide-react';
import SEO from '../../components/SEO';
import { MUNICIPALITY } from '../../config/site';
import barangayData from '../../data/kananga/barangays.json';
import officials from '../../data/kananga/officials.json';

const totalPopulation = barangayData.barangays.reduce(
  (total, barangay) => total + barangay.population,
  0
);

const quickFacts = [
  {
    icon: Users,
    label: `Population (${barangayData.census} census)`,
    value: MUNICIPALITY.population2020.toLocaleString(),
  },
  { icon: MapPin, label: 'Barangays', value: `${MUNICIPALITY.barangayCount}` },
  { icon: Landmark, label: 'Income class', value: MUNICIPALITY.incomeClass },
  {
    icon: Flame,
    label: 'Province and region',
    value: `${MUNICIPALITY.province}, ${MUNICIPALITY.region}`,
  },
];

const KanangaProfile: FC = () => (
  <div className='min-h-screen bg-gray-50'>
    <SEO
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Kananga', url: '/kananga' },
      ]}
    />

    <div className='bg-primary-700 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <h1 className='text-3xl md:text-4xl font-bold'>
          {MUNICIPALITY.fullName}
        </h1>
        <p className='mt-2 text-primary-100'>
          {MUNICIPALITY.province}, {MUNICIPALITY.region} · Postal code{' '}
          {MUNICIPALITY.postalCode}
        </p>
        <div className='mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {quickFacts.map(fact => (
            <div key={fact.label} className='bg-primary-800 rounded-lg p-4'>
              <fact.icon className='h-5 w-5 text-primary-200' />
              <div className='mt-2 text-lg font-semibold'>{fact.value}</div>
              <div className='text-xs text-primary-200'>{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <section className='container mx-auto px-4 py-12'>
      <h2 className='text-2xl font-bold text-gray-900'>Elected officials</h2>
      <p className='mt-1 text-sm text-gray-600'>
        Term {officials.term}. Source: {officials.source}.
      </p>
      <div className='mt-6 grid md:grid-cols-2 gap-4'>
        {[
          { role: 'Municipal Mayor', person: officials.mayor },
          { role: 'Municipal Vice Mayor', person: officials.viceMayor },
        ].map(({ role, person }) => (
          <div key={role} className='bg-white rounded-lg border p-6'>
            <div className='text-sm text-gray-500'>{role}</div>
            <div className='mt-1 text-xl font-semibold text-gray-900'>
              {person.name}
            </div>
            <div className='text-sm text-gray-600'>
              {person.party} · {person.votes.toLocaleString()} votes
            </div>
          </div>
        ))}
      </div>
      <h3 className='mt-8 text-lg font-semibold text-gray-900'>
        Sangguniang Bayan members
      </h3>
      <p className='mt-1 text-sm text-gray-600'>
        Names as printed on the 2025 ballot.
      </p>
      <ol className='mt-4 grid sm:grid-cols-2 gap-2'>
        {officials.councilors.map(councilor => (
          <li
            key={councilor.name}
            className='bg-white rounded-lg border px-4 py-3 flex justify-between'
          >
            <span className='font-medium text-gray-900'>{councilor.name}</span>
            <span className='text-sm text-gray-600'>
              {councilor.party} · {councilor.votes.toLocaleString()}
            </span>
          </li>
        ))}
      </ol>
    </section>

    <section className='container mx-auto px-4 pb-12'>
      <h2 className='text-2xl font-bold text-gray-900'>Barangays</h2>
      <p className='mt-1 text-sm text-gray-600'>{barangayData.source}.</p>
      <div className='mt-6 bg-white rounded-lg border overflow-x-auto'>
        <table className='w-full text-sm'>
          <caption className='sr-only'>
            Barangays of Kananga with {barangayData.census} census population
          </caption>
          <thead>
            <tr className='border-b bg-gray-50 text-left'>
              <th scope='col' className='px-4 py-3 font-semibold'>
                Barangay
              </th>
              <th scope='col' className='px-4 py-3 font-semibold text-right'>
                Population ({barangayData.census})
              </th>
            </tr>
          </thead>
          <tbody>
            {barangayData.barangays.map(barangay => (
              <tr key={barangay.name} className='border-b last:border-0'>
                <td className='px-4 py-2'>{barangay.name}</td>
                <td className='px-4 py-2 text-right'>
                  {barangay.population.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className='bg-gray-50 font-semibold'>
              <td className='px-4 py-3'>Total</td>
              <td className='px-4 py-3 text-right'>
                {totalPopulation.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>

    <section className='container mx-auto px-4 pb-16'>
      <h2 className='text-2xl font-bold text-gray-900'>About the town</h2>
      <div className='mt-4 grid md:grid-cols-2 gap-4'>
        <div className='bg-white rounded-lg border p-6'>
          <h3 className='font-semibold text-gray-900'>Geothermal economy</h3>
          <p className='mt-2 text-sm text-gray-600'>
            Kananga hosts the Tongonan Geothermal Power Plant, the largest wet
            steam field in the Philippines, operated by the Energy Development
            Corporation in barangay Tongonan. Geothermal royalties placed the
            municipal revenue at 382.7 million pesos in 2024, the highest among
            the municipalities of {MUNICIPALITY.region}.
          </p>
        </div>
        <div className='bg-white rounded-lg border p-6'>
          <h3 className='font-semibold text-gray-900'>Kaanyag Festival</h3>
          <p className='mt-2 text-sm text-gray-600'>
            The five day Kaanyag Festival celebrates the beauty, fragrance,
            flavor and abundance of the town with a grand parade, street
            dancing, a ritual showdown and the Miss Kananga Kaanyag pageant.
          </p>
        </div>
      </div>
      <p className='mt-6 text-xs text-gray-500'>
        Data sources:{' '}
        <a
          className='underline hover:text-gray-700'
          href='https://www.philatlas.com/visayas/r08/leyte/kananga.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          PhilAtlas
        </a>
        ,{' '}
        <a
          className='underline hover:text-gray-700'
          href='https://halalanresults.abs-cbn.com/local/leyte/kananga'
          target='_blank'
          rel='noopener noreferrer'
        >
          ABS-CBN Halalan 2025
        </a>
        ,{' '}
        <a
          className='underline hover:text-gray-700'
          href='https://www.pna.gov.ph/articles/1202935'
          target='_blank'
          rel='noopener noreferrer'
        >
          Philippine News Agency
        </a>
        .
      </p>
    </section>
  </div>
);

export default KanangaProfile;
