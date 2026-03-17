export interface FounderTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface FounderHonor {
  title: string;
  description: string;
}

export interface FounderQuote {
  text: string;
  attribution?: string;
}

export interface Founder {
  slug: string;
  name: string;
  years: string;
  role: string;
  title: string;
  portrait: string;
  heroQuote: string;
  heroSnippet: string;
  metaDescription: string;
  originLabel: string;
  originTitle: string;
  originParagraphs: string[];
  pullQuote: FounderQuote;
  originAside: string;
  milestonesLabel: string;
  milestonesTitle: string;
  timeline: FounderTimelineItem[];
  instituteLabel: string;
  instituteTitle: string;
  instituteParagraphs: string[];
  instituteStats: { value: string; label: string }[];
  largeQuote: FounderQuote;
  personalLabel: string;
  personalTitle: string;
  personalParagraphs: string[];
  honorsLabel: string;
  honorsTitle: string;
  honors: FounderHonor[];
  closingTitle: string;
  closingParagraphs: string[];
  closingQuote: string;
  lifeImages?: { src: string; caption: string }[];
  personalImage?: string;
}

export const founders: Founder[] = [
  // ─────────────────────────────────────────────
  // FOUNDER 1: Dr. Muthulakshmi Reddy
  // ─────────────────────────────────────────────
  {
    slug: 'dr-muthulakshmi-reddy',
    name: 'Dr. Muthulakshmi Reddy',
    years: '1886 \u2013 1968',
    role: 'Founder, Cancer Institute (WIA)',
    title: 'A Legacy That Never Dies',
    portrait: '/images/founders/dr-muthulakshmi-reddy.jpg',
    heroQuote:
      '\u201CService above self. Service without social or economic divide.\u201D',
    heroSnippet:
      'India\'s first woman legislator. Founded the Cancer Institute in 1954 from a small hut in Adyar with 12 beds and a conviction that no patient should be turned away.',
    metaDescription:
      'The life and legacy of Dr. Muthulakshmi Reddy, founder of Cancer Institute (WIA), India\'s first woman legislator, and a pioneer of equitable healthcare.',
    originLabel: 'The Beginning',
    originTitle: 'Born into a world that did not expect her',
    originParagraphs: [
      'On July 30, 1886, in the small princely state of Pudukkottai in Tamil Nadu, a girl was born who would one day change the fate of thousands. Her father, Narayanaswami Iyer, was principal of the Maharaja\'s College. Her mother, Chandrammal, was a former devadasi. In that conservative, rigid society, this union was itself an act of defiance \u2014 and Muthulakshmi inherited every ounce of it.',
      'The family was ostracised. Whispers followed them. Yet Muthulakshmi studied. She burned through textbooks. When she passed her matriculation examination with distinction, she did something no girl had done before \u2014 she applied to Maharaja\'s College. Parents of boys threatened to pull their children out. The college refused. There were protests. There was outrage.',
      'But the Raja of Pudukkottai, Martanda Bhairava Thondaman, looked at the results and overruled them all. The doors opened. Muthulakshmi walked through. She never looked back.',
    ],
    pullQuote: {
      text: '\u201CNo woman, rich or poor, should remain uneducated. That was not a belief she held \u2014 it was a fire she lived.\u201D',
      attribution: 'From records of the Women\'s Indian Association',
    },
    originAside:
      'She went on to Madras Medical College in 1907 \u2014 the first female student in Surgery. She graduated in 1912. She became the first woman House Surgeon at the Government Maternity and Ophthalmic Hospital. First. Always first.',
    milestonesLabel: 'A Life of Firsts',
    milestonesTitle:
      'The walls she walked through so others wouldn\'t have to',
    timeline: [
      {
        year: '1907',
        title: 'First Woman at Madras Medical College',
        description:
          'Enrolled in Surgery \u2014 a department that had never admitted a woman. She did not merely attend; she excelled, setting a precedent that could not be undone.',
      },
      {
        year: '1914',
        title: 'A Marriage of Equals',
        description:
          'When she married Dr. Sundara Reddy, she set a condition no woman had dared to set: \u201CYou must always respect me as an equal and never cross my wishes.\u201D He agreed. She held him to it.',
      },
      {
        year: '1917',
        title: 'Co-Founder, Women\'s Indian Association',
        description:
          'Alongside Annie Besant, she co-founded the WIA \u2014 giving Indian women their first organised political voice. She wrote, she spoke, she legislated. She turned quiet suffering into loud policy.',
      },
      {
        year: '1927',
        title: 'India\'s First Woman Legislator',
        description:
          'Nominated to the Madras Legislative Council, she was unanimously elected Deputy President. She used the floor to raise the age of marriage, protect women\'s property rights, and propose the historic Devadasi Abolition Bill.',
      },
      {
        year: '1931',
        title: 'Avvai Home \u2014 Shelter Without Walls',
        description:
          'Three girls fleeing forced dedication as devadasis came to her with nowhere to go. She opened her own home in Adyar and called it Avvai Home \u2014 a sanctuary for destitute women, orphan children, abandoned babies, and unwed mothers. No questions. No judgment.',
      },
      {
        year: '1947',
        title: 'Her Name on the First Flag',
        description:
          'When India\'s leaders gathered to hoist the first national flag at the Red Fort on Independence Day, they chose to inscribe her name on that flag. Not as a title. As a tribute to everything she had given this country.',
      },
      {
        year: '1954',
        title: 'A Small Hut. A Monumental Dream.',
        description:
          'She founded the Cancer Institute (WIA) \u2014 the first dedicated cancer centre in South India. It began as a small hut in Adyar. A government minister told her, \u201CWhy a cancer hospital? People only die of cancer.\u201D She built it anyway.',
      },
      {
        year: '1956',
        title: 'Padma Bhushan',
        description:
          'India\'s third-highest civilian honour, awarded in recognition of a life that had already honoured India a hundredfold over. She was 70 years old. She was still working.',
      },
    ],
    instituteLabel: 'Her Greatest Monument',
    instituteTitle: 'Built from grief. Driven by love.',
    instituteParagraphs: [
      'It began with a sister. As a young doctor, Dr. Muthulakshmi watched helplessly as her own sister died from a misdiagnosed case of rectal cancer. In the era of colonial India, there were no resources, no specialists, no hope for cancer patients. The grief never left her. Neither did the resolve.',
      'Decades later, when she approached the Government of Tamil Nadu for land to build a cancer centre, a minister looked at her and asked, \u201CWhy a cancer hospital? People only die of cancer.\u201D That single, callous sentence could have ended the dream. Instead, it hardened her purpose. She built it with voluntary women\'s groups, personal fundraising, and sheer will.',
      'In 1954, in a small hut in Adyar, Chennai, the Cancer Institute (WIA) opened its doors. No fanfare. No government subsidy. Just twelve beds, a handful of nurses, and the conviction that cancer patients \u2014 rich and poor, high-caste and low \u2014 deserved to be seen and treated as human beings. The ethos she embedded from the very first day has never changed: \u201CService above self. Service without social or economic divide.\u201D',
      'Today, the institute she began in a hut is one of the largest cancer centres in India. It is the first in the country to offer postgraduate degrees in oncology sub-specialities recognised by the Medical Council of India. It treats over a lakh patients every year. Between 20 and 25 percent of patients receive treatment completely free. Everyone else is subsidised. The doors are never closed on the basis of a bank balance.',
    ],
    instituteStats: [
      { value: '675+', label: 'Patient care beds today' },
      { value: '1954', label: 'Founded in a single hut, Adyar' },
      { value: '70+', label: 'Years of uninterrupted service' },
      { value: '1st', label: 'Specialised cancer centre in South India' },
    ],
    largeQuote: {
      text: '\u201CLaws and legislation are there only for sanction. It is up to us women to energise these and implement them into action.\u201D',
      attribution: 'Dr. Muthulakshmi Reddy',
    },
    personalImage: '/images/founders/reddy-personal.png',
    personalLabel: 'The Woman Behind the Icon',
    personalTitle:
      'She was not a symbol. She was a person who refused to stop.',
    personalParagraphs: [
      'We speak of her today in the language of monuments and milestones \u2014 first woman legislator, Padma Bhushan, founder, pioneer. But the truth of Dr. Muthulakshmi Reddy is rawer than any title. She was a daughter born into shame, who chose dignity. She was a student who was turned away, who kept returning. She was a doctor who lost a sister and chose, instead of grief, to build something that would mean no one else would have to lose the way she did.',
      'She was in her seventies when she was still fighting. Still fundraising. Still arguing with government officials. Still opening her own home to people who had nowhere else to go. When three young girls \u2014 devadasis who had escaped \u2014 came to her door, she did not hand them a pamphlet or a policy number. She brought them inside. She fed them. She called it Avvai Home, after the ancient Tamil saint-poet who taught that all people are equal.',
      'She set the terms of her own marriage \u2014 an extraordinary act in 1914. She travelled to London and Chicago to represent Indian women before international committees. She was the only woman on the Hartog Commission on Indian education. At every table, in every room, she spoke. Not for herself. For every woman who was not yet in the room.',
      'She died on July 22, 1968 \u2014 eight days before her 82nd birthday. The world bowed. The institutions she left behind kept standing.',
    ],
    honorsLabel: 'Recognition & Living Tributes',
    honorsTitle:
      'The honours given. The legacy that cannot be given back.',
    honors: [
      {
        title: 'Padma Bhushan, 1956',
        description:
          'India\'s third-highest civilian award \u2014 a formal acknowledgment of a life spent in service to her country\'s most vulnerable.',
      },
      {
        title: 'The First National Flag',
        description:
          'Her name was inscribed on the flag raised at the Red Fort on India\'s Independence Day, 1947. A rare, irreplaceable honour.',
      },
      {
        title: 'Dr. Muthulakshmi Maternity Benefit Scheme',
        description:
          'The Government of Tamil Nadu named its landmark maternal nutrition programme after her \u2014 a scheme that continues to reach hundreds of thousands of women annually.',
      },
      {
        title: 'Google Doodle, 2019',
        description:
          'On her 133rd birth anniversary, Google honoured her with a Doodle \u2014 introducing her story to millions around the world who had never heard her name.',
      },
      {
        title: 'July 30 \u2014 Hospital Day, Tamil Nadu',
        description:
          'Her birth anniversary is commemorated each year as Hospital Day across Tamil Nadu, a state-wide tribute to her transformative impact on public health.',
      },
      {
        title: 'Avvai Home & Cancer Institute',
        description:
          'Her two living monuments \u2014 still standing, still serving \u2014 are the truest tributes: institutions that embody her belief that human dignity is not a privilege.',
      },
    ],
    closingTitle:
      'She is gone. But nothing she built has ever stopped.',
    closingParagraphs: [
      'Every person who walks through the gates of this institute walks through a door she opened \u2014 not with funding or fanfare, but with grief turned to purpose, prejudice turned to fuel, and a quiet, unbreakable belief that the sick deserve care regardless of who they are.',
      'She was the first woman in rooms that did not want her. She became the reason those rooms changed. She was told cancer patients only die. She built a place where they live \u2014 and fight, and hope, and sometimes win.',
    ],
    closingQuote:
      'Her legacy endures in every devadasi who won her freedom, in every girl who went to school when the world said no, in every woman who became a doctor, and in every life saved within these walls.',
    lifeImages: [
      { src: '/images/founders/reddy-life-1.png', caption: 'Dr. Muthulakshmi Reddy — a portrait from later years' },
      { src: '/images/founders/reddy-life-2.png', caption: 'With colleagues and dignitaries who supported her mission' },
      { src: '/images/founders/reddy-life-3.png', caption: 'At an official ceremony — a lifetime of service recognised' },
      { src: '/images/founders/reddy-life-4.png', caption: 'Meeting with leaders who championed public health in India' },
    ],
  },

  // ─────────────────────────────────────────────
  // FOUNDER 2: Dr. S. Krishnamurthi
  // ─────────────────────────────────────────────
  {
    slug: 'dr-s-krishnamurthi',
    name: 'Dr. S. Krishnamurthi',
    years: '1919 \u2013 2010',
    role: 'First Scientific Director',
    title: 'The Architect of Indian Oncology',
    portrait: '/images/founders/dr-s-krishnamurthi.jpg',
    heroQuote:
      '\u201CA patient with curable cancer should not be denied treatment for lack of money.\u201D',
    heroSnippet:
      'Secured Asia\'s first Cobalt-60 unit. Founded India\'s first nuclear medicine department and paediatric oncology unit. Created the discipline of oncology in India.',
    metaDescription:
      'The life and legacy of Dr. S. Krishnamurthi, the architect of Indian oncology, first Scientific Director of Cancer Institute (WIA), and pioneer of cancer science in India.',
    originLabel: 'The Beginning',
    originTitle:
      'Son of a legend. Destined to become one himself.',
    originParagraphs: [
      'On September 12, 1919, Sundara Krishnamurthi was born to two of the most remarkable people in India: Dr. Sundara Reddy, a physician, and Dr. Muthulakshmi Reddy, India\'s first woman medical graduate, its first woman legislator, and the visionary who would one day found the Cancer Institute (WIA). Growing up in that household was not merely an education in medicine. It was an education in what medicine was for.',
      'His mother had watched her younger sister die of advanced rectal cancer, a disease that colonial India called karma vyadhi \u2014 the disease of destiny \u2014 as if suffering were something people deserved. Dr. Muthulakshmi refused that idea for the rest of her life. Her son inherited the refusal.',
      'He completed his MBBS in 1942 and his MS in 1946. Then, in 1947, his mother sent him abroad. Not as a reward. As a mission. She wanted him to return with the knowledge that did not yet exist in India, so that the cancer hospital she was already planning could have someone who knew exactly what it needed to do.',
    ],
    pullQuote: {
      text: '\u201CIn a nation where a large majority speaks of Gandhian values but hardly a handful practices it, the significance of his life and work are monumental.\u201D',
      attribution:
        'Tribute, Indian Journal of Surgical Oncology, 2011',
    },
    originAside:
      'He trained as a Fellow at the Ellis Fischel State Cancer Hospital in Missouri, USA, and later at the Royal Cancer Hospital in London. He did not go to study in the abstract. He went to learn how to fight a specific disease for a specific country\'s patients.',
    milestonesLabel: 'A Life of Scientific Firsts',
    milestonesTitle:
      'What he brought to India that India did not yet have.',
    timeline: [
      {
        year: '1954',
        title: 'First Resident Medical Officer, Cancer Institute (WIA)',
        description:
          'Joined his mother\'s institute at its founding as its first RMO and Scientific Director. Two doctors, twelve beds, and a conviction that cancer was curable. He began changing public perception of the disease from that first day.',
      },
      {
        year: '1956',
        title: 'India\'s First Nuclear Medicine Department',
        description:
          'Established the country\'s first nuclear medicine department at the Cancer Institute, introducing radioactive isotopes into diagnosis and treatment at a time when this was entirely new to Indian medicine.',
      },
      {
        year: '1957',
        title: 'Asia\'s First Cobalt-60 Teletherapy Unit',
        description:
          'Secured the Eldorado-A cobalt-60 unit, a gift from Atomic Energy of Canada Limited, making the Cancer Institute the first in all of South and Southeast Asia to enter the supervoltage era of radiotherapy. He personally petitioned Jawaharlal Nehru to waive customs duty on the import.',
      },
      {
        year: '1957',
        title: 'Railway Concessions for Cancer Patients Across India',
        description:
          'On his representation to the Union Ministry, railway travel concessions were extended to all cancer patients in India. A single letter changed the lives of patients who could not afford to come back for follow-up care.',
      },
      {
        year: '1958',
        title: 'Pioneer of Multimodal Cancer Therapy in India',
        description:
          'Introduced combined modality treatment for oral cancer, integrating surgery, radiation, and chemotherapy at a time when most centres still treated these as separate options. This approach was declared an \u201Cinnovative advance\u201D in the International Year Book of Cancer, 1964.',
      },
      {
        year: '1959',
        title: 'Director, Cancer Institute (WIA)',
        description:
          'Took over as Director, a role he held until 1980. Under his directorship, the institute grew from twelve beds to a nationally recognised regional cancer centre, building research, education, and clinical care simultaneously.',
      },
      {
        year: '1960',
        title: 'India\'s First Paediatric Oncology Unit',
        description:
          'Founded the country\'s first dedicated unit for childhood cancers, recognising before almost anyone else in India that children with cancer needed specialist care tailored to their biology and to their lives.',
      },
      {
        year: 'Early 1960s',
        title: 'Pre-operative Radiation in Breast Cancer',
        description:
          'Was the first in India to treat patients with radiation before surgery in breast cancer. This was a paradigm shift in the management of large tumours, and it would go on to become a standard of care worldwide.',
      },
      {
        year: '1961',
        title: 'India\'s First Rural Cancer Screening Survey',
        description:
          'Conducted the Chenglepet Cancer Survey, the first opportunistic cancer screening programme in the country, taking cancer detection out of the hospital and into the community for the very first time.',
      },
      {
        year: '1970',
        title: 'Padma Shri',
        description:
          'Awarded India\'s fourth-highest civilian honour in recognition of his pioneering contributions to cancer science, education, and patient care across more than two decades of work.',
      },
      {
        year: '1982',
        title: 'India\'s First Super-Specialty Oncology Degrees',
        description:
          'After a decade of persistent effort, he introduced the MCh in Surgical Oncology and DM in Medical Oncology at the Cancer Institute, the first such super-specialty qualifications in India recognised by the Medical Council. This created the very discipline of oncology as a distinct medical specialty in the country.',
      },
      {
        year: '1987',
        title: 'Honorary Surgeon to the President of India',
        description:
          'Appointed Honorary Surgeon to the President of India, a position he held until 1992, a formal recognition of his standing as one of the foremost surgeons in the country.',
      },
    ],
    instituteLabel: 'What He Built',
    instituteTitle:
      'From huts to a hemisphere of cancer science.',
    instituteParagraphs: [
      'When Dr. Krishnamurthi arrived in 1954, the Cancer Institute had no proper diagnostic equipment, no radiotherapy unit, no chemotherapy protocols, no training programmes, and no precedent to follow. He did not wait for precedent. He set it. Within three years, the institute had Asia\'s first cobalt-60 unit and India\'s first nuclear medicine department. Within six years, it had the country\'s first paediatric oncology unit. Within a decade, it was publishing research in international journals and being cited in global oncology yearbooks.',
      'His case records from the late 1950s and early 1960s, reviewed by colleagues who came after him, were described as examples of such meticulous clarity and accountability that they were almost impossible to match. He insisted on thoroughness not as a bureaucratic exercise but as a moral one. Every patient documented was a patient whose story mattered.',
      'He was a teacher who poured himself into his students without ego. His farewell message to the generations trained at the institute carried a generosity that colleagues have never forgotten: \u201CIf you start where I started you are likely to end where I ended, which would be self-defeating. Do not start where I started. Progress to reach greater heights.\u201D In a field where mentors guard their knowledge, he gave his away.',
      'He sat in a hospital room in his final weeks with the air conditioning switched off in the May heat. On his wall was a photograph of a young Dr. Shanta, his colleague of fifty years. He told the journalist who interviewed him that he was satisfied she had won the Magsaysay Award rather than him. That was who he was.',
    ],
    instituteStats: [
      { value: '1st', label: 'Cobalt-60 unit in Asia, installed 1957' },
      {
        value: '1st',
        label: 'Nuclear medicine department in India, 1956',
      },
      {
        value: '70+',
        label: 'Scientific publications in international journals',
      },
      {
        value: '1964',
        label:
          'Multimodal therapy cited in International Year Book of Cancer',
      },
    ],
    largeQuote: {
      text: '\u201CIf you start where I started you are likely to end where I ended, which would be self-defeating. Progress to reach greater heights.\u201D',
      attribution:
        'Dr. S. Krishnamurthi, to the generations he trained',
    },
    personalLabel: 'The Man Behind the Science',
    personalTitle:
      'He gave everything. He kept nothing back for himself.',
    personalParagraphs: [
      'Dr. Krishnamurthi belonged to a tradition of medicine that is difficult to find now. He was a Gandhian. He and his mother were both followers of Gandhi, not in sentiment but in practice. He lived modestly, worked without the expectation of public recognition, and consistently pushed his colleague Dr. Shanta to take the front stage while he remained in the background. He was not diminished by her success. He was glad of it.',
      'He used to insist on something that his students carried with them for the rest of their careers: if a patient had no one else to take care of them, the doctor must. Not as policy. As responsibility. As the minimum condition of calling yourself a physician. He documented his own mistakes with the same clarity he brought to his successes, once writing \u201Cwrong selection of case by surgeon\u201D in a patient\'s notes, a confession that colleagues described as requiring more courage than most doctors ever show.',
      'He lectured without notes, drawing on a depth of clinical knowledge that left generations of students in awe. His impromptu lectures on basic oncology were described as extraordinary. He had over 70 publications in scientific journals. He served on WHO committees for seventeen years. He was an Honorary Surgeon to the President of India. And yet the photograph on his hospital wall in his final days was not of prizes or certificates. It was of his young colleague, the person whose success he had helped make possible.',
      'He passed away on July 3, 2010. The campus he helped build from a cluster of huts now bears his name. The Dr. S. Krishnamurthi Campus stands alongside the Dr. V. Shanta Campus in Adyar, a permanent testament to a partnership that lasted half a century and changed the face of cancer care in India.',
    ],
    honorsLabel: 'Recognition',
    honorsTitle:
      'Honoured by India. Remembered by every patient he refused to give up on.',
    honors: [
      {
        title: 'Padma Shri, 1970',
        description:
          'India\'s fourth-highest civilian award, recognising sixteen years of scientific leadership that had already placed the Cancer Institute (WIA) among the leading oncology centres in Asia.',
      },
      {
        title: 'Honorary Surgeon to the President of India',
        description:
          'Appointed 1987, a position he held until 1992. A formal acknowledgment of his standing at the summit of Indian surgical medicine.',
      },
      {
        title:
          'Lifetime Achievement Award, Indian Society of Oncology',
        description:
          'Awarded by the professional body of the field he built, for a body of work that no single award could adequately measure.',
      },
      {
        title: 'WHO Committees, 1965 to 1982',
        description:
          'For seventeen years, served on one or more committees of the World Health Organization, bringing the experience of cancer care in India\'s context to global health policy.',
      },
      {
        title: 'The Dr. S. Krishnamurthi Campus',
        description:
          'One of the two campuses of Cancer Institute (WIA) in Adyar bears his name. The institution he helped build from a hut is, in the most literal sense, his monument.',
      },
      {
        title: 'The Discipline He Created',
        description:
          'Oncology as a distinct medical specialty in India exists because he spent a decade fighting to establish it. Every oncologist trained in India inherits something from that fight.',
      },
    ],
    closingTitle:
      'He built the science. He trained the scientists. Then he told them to go further.',
    closingParagraphs: [
      'He returned from America and Britain with knowledge that India did not yet have. He found corruption and walked away from it. He found his mother\'s huts in Adyar and stayed. He installed Asia\'s first cobalt machine, founded India\'s first nuclear medicine department, introduced multimodal therapy before the world had named it that, and created the very qualification that defines an oncologist in India today.',
      'He did all of this without seeking the limelight. He sat in a warm room in his final weeks, proud that his colleague had won the prize he never claimed for himself. He was not a man who needed monuments. He needed patients to be treated. He needed doctors to be trained. He needed cancer to be beatable.',
    ],
    closingQuote:
      'Every patient who survives a cancer in India, every oncologist who trained in a super-specialty programme, every child who received care in a paediatric oncology unit, every person who travelled to follow-up care on a subsidised train ticket, carries something of what he gave.',
  },

  // ─────────────────────────────────────────────
  // FOUNDER 3: Dr. V. Shanta
  // ─────────────────────────────────────────────
  {
    slug: 'dr-v-shanta',
    name: 'Dr. V. Shanta',
    years: '1927 \u2013 2021',
    role: 'Director & Chairman, Cancer Institute (WIA)',
    title: 'The Mother of Oncology in India',
    portrait: '/images/founders/dr-v-shanta.jpg',
    heroQuote: '\u201CFear not cancer diagnosis, but its delay.\u201D',
    heroSnippet:
      'Lived on the Cancer Institute campus for 66 years. Ramon Magsaysay Award winner. Padma Vibhushan. Ensured 60% of patients received free or subsidised treatment.',
    metaDescription:
      'The life and legacy of Dr. V. Shanta, the Mother of Oncology in India, who lived on the Cancer Institute campus for 66 years and transformed cancer care across the nation.',
    originLabel: 'The Beginning',
    originTitle:
      'Born into a family of Nobel Laureates. She chose a different kind of greatness.',
    originParagraphs: [
      'On March 11, 1927, in Mylapore, Chennai, Viswanathan Shanta was born into a family that carried the weight of extraordinary minds. Her grand uncle was Sir C. V. Raman, the only Asian to win the Nobel Prize in Physics. Her maternal uncle was Subrahmanyan Chandrasekhar, the astrophysicist who would go on to win the Nobel Prize in 1983. Science ran through her blood. But the path she chose was her own.',
      'By the age of twelve, she had made up her mind: she would become a doctor. She studied at Madras Medical College and earned her MBBS in 1949, her DGO in 1952, and her MD in Obstetrics and Gynecology in 1955. The conventional path for a woman of her calibre and era was clear: gynecology, a government posting, a secure career.',
      'She did not take the conventional path.',
    ],
    pullQuote: {
      text: '\u201CI jumped at the opportunity and joined the Institute. It was truly a turning point in my career, made possible by the indomitable courage of Dr. Muthulakshmi Reddy. She was a legend in her lifetime.\u201D',
      attribution: 'Dr. V. Shanta, ASCO Post, 2019',
    },
    originAside:
      'As a student, she had witnessed a cancer specialist dismiss a dying patient with the words: \u201CPass the case on to better surgeons.\u201D She was dumbfounded. That moment planted a seed that would grow into sixty-five years of defiance against cancer\'s cruelty.',
    milestonesLabel: 'Six Decades of Firsts',
    milestonesTitle: 'What she built, year after year.',
    timeline: [
      {
        year: '1955',
        title: 'Joined the Institute, Never Left',
        description:
          'Moved onto the campus on April 13, 1955. One of only two doctors. Worked voluntarily for a year. Made it her home, her mission, her entire world.',
      },
      {
        year: '1960s',
        title:
          'First Successful Combination Therapy Trials in India',
        description:
          'Led India\'s first successful trials of combination cancer therapy, achieving a dramatic breakthrough in the treatment of oral cancer. Published findings in international journals and placed the institute on the global oncology map.',
      },
      {
        year: '1974',
        title:
          'India\'s First Regional Cancer Research and Treatment Centre',
        description:
          'Under her scientific leadership, the Cancer Institute (WIA) became the first in South India recognised as a Regional Cancer Centre by the Government of India, a designation that unlocked national resources and credibility.',
      },
      {
        year: '1980',
        title: 'Director, Cancer Institute (WIA)',
        description:
          'Appointed Director, a position she held until 1997. She built international partnerships in Europe, North America, and Japan and equipped the institute with state-of-the-art research and imaging facilities. The 12-bed hut was becoming a world-class institution.',
      },
      {
        year: '1981',
        title: 'Founded the Madras Metropolitan Tumour Registry',
        description:
          'Established one of the most rigorous cancer data registries in Asia. She believed you cannot fight what you cannot measure. This registry, maintained to this day, feeds into national cancer policy and WHO global data on cancer incidence and survival.',
      },
      {
        year: '1984',
        title: 'First MCh and DM in Oncology in India',
        description:
          'Under her leadership, the institute launched India\'s first postgraduate oncology degrees recognised by the Medical Council of India, creating a pipeline of specialists where none had existed.',
      },
      {
        year: '1986',
        title: 'Padma Shri',
        description:
          'India\'s fourth-highest civilian honour, awarded in recognition of her growing national contribution to cancer medicine and public health policy.',
      },
      {
        year: '2000',
        title: 'India\'s First Hereditary Cancer Clinic',
        description:
          'Recognised that cancer runs in families and that families deserved to know. Opened India\'s first dedicated hereditary cancer clinic, offering genetic counselling and early screening to those at highest risk.',
      },
      {
        year: '2005',
        title: 'Ramon Magsaysay Award',
        description:
          'Asia\'s most prestigious prize, often called the Asian Nobel. The citation noted that the institute under her care provided free or subsidised treatment to 60% of its 100,000 annual patients. She dedicated the award entirely to the institute.',
      },
      {
        year: '2006 & 2016',
        title: 'Padma Bhushan and Padma Vibhushan',
        description:
          'India\'s third and second highest civilian honours, awarded a decade apart for a life of expanding, deepening, and unrelenting service. She was 89 when the Padma Vibhushan reached her hands.',
      },
    ],
    instituteLabel: 'What She Built',
    instituteTitle:
      'From twelve beds in a hut to a world-class institution.',
    instituteParagraphs: [
      'When Dr. Shanta arrived in 1955, the Cancer Institute had twelve beds, minimal infrastructure, and an ethos that felt almost impractical for the time: treat everyone, regardless of what they can pay. She did not question the ethos. She built around it. She raised donations. She argued with governments. She wrote letters to corporates seeking funds on the very last day of her life, at 93, her secretary by her side.',
      'She introduced chemotherapy and radiation therapy to India. She tailored treatment protocols specifically for Indian patients, whose biology, access to care, and presentation of disease often differed from Western counterparts. She pioneered cervical cancer screening in rural districts, training local health workers to take Pap smears and identify abnormalities. She established the Tamil Nadu Cancer Registry Project, the largest population-based cancer registry in the world by the population it covers.',
      'She started India\'s first paediatric oncology department. Because children were getting cancer too, and they had no one fighting for them specifically. She created that place and those specialists. She kept the institute\'s treatment free or subsidised for over sixty percent of patients throughout her tenure, battling the tide of commercialisation of medicine that she spoke about with visible anguish.',
      'Not a single case file has been lost since 1955. Patient follow-up exceeds ninety percent, a benchmark almost unheard of in the Indian context. This was not an accident. It was Dr. Shanta\'s insistence that every patient was a person whose story deserved to be told and remembered.',
    ],
    instituteStats: [
      {
        value: '65+',
        label: 'Years of continuous service at the institute',
      },
      {
        value: '1st',
        label: 'Paediatric oncology department in India',
      },
      {
        value: '90%+',
        label: 'Patient follow-up rate, a national benchmark',
      },
      {
        value: '60%',
        label:
          'Patients treated free or subsidised under her leadership',
      },
    ],
    largeQuote: {
      text: '\u201CThe younger generation must ensure that the wonderful technologic advances they have are used not because they are available, but because they add value and are cost-effective. Take important decisions for your patients as you would take for your dear ones.\u201D',
      attribution:
        'Dr. V. Shanta, on the next generation of oncologists',
    },
    personalLabel: 'The Person Behind the Pioneer',
    personalTitle:
      'She did not believe in keeping cancer at a distance.',
    personalParagraphs: [
      'Dr. Shanta despised the way cancer was spoken about, the casual usage of its name as a metaphor for irreversible failure, for things that cannot be fixed. She believed that framing was a form of cruelty. It made patients give up before they had begun. She spent decades pushing a counter-message: early cancers are curable. She said it in clinics, in conferences, in rural health camps in Tamil Nadu\'s districts. She meant every word.',
      'She saw patients at 78, still performing surgery, still on call twenty-four hours a day. She chose to be medically managed within the institute\'s own campus when she fell ill near the end, not wanting to be moved to a private hospital. This was her home. This was her place. She had lived there since April 13, 1955, and she had no intention of leaving it even in her final hours.',
      'She was deeply distressed by the commercialisation of medicine, a doctor who watched healthcare become something people feared not just for its illness but for its cost. She worked tirelessly to secure government subsidies on anticancer drugs, to win rail and road travel concessions for patients attending regular follow-ups, to raise donations from corporations so that the institute\'s founding promise, \u201Cservice to all,\u201D could remain more than a motto.',
      'On January 18, 2021, she complained of chest pain. She was rushed to a hospital, though she had asked to stay in her own institute. She died early the next morning, January 19, 2021, at the age of ninety-three. Her secretary later recalled that even in her final days, she had been dictating letters seeking donations for the institute she loved.',
    ],
    honorsLabel: 'Recognition',
    honorsTitle:
      'The honours she received. And the ones she could not be given.',
    honors: [
      {
        title: 'Padma Shri, 1986',
        description:
          'India\'s fourth-highest civilian honour, recognising her early contributions to cancer medicine and public health in India.',
      },
      {
        title: 'Ramon Magsaysay Award, 2005',
        description:
          'Asia\'s most prestigious prize. She dedicated it entirely to the institute. The citation noted the institute\'s service to 100,000 patients annually, with over 60% receiving free or subsidised treatment.',
      },
      {
        title: 'Padma Bhushan, 2006',
        description:
          'India\'s third-highest civilian honour, awarded for a lifetime of transformative contribution to oncology and equitable healthcare.',
      },
      {
        title: 'Padma Vibhushan, 2016',
        description:
          'India\'s second-highest civilian honour. She was 89. Her work had not slowed. India had finally caught up with what she had been doing for sixty years.',
      },
      {
        title: 'WHO Advisory Committee on Cancer',
        description:
          'Served on the World Health Organization\'s Advisory Committee on Cancer from 1986 to 2005, shaping global cancer policy with a steady focus on low and middle-income countries.',
      },
      {
        title: 'Mother of Oncology in India',
        description:
          'Not an official title. Not an award. A name given to her by the field she built, from the ground up, over sixty-five years. No medal can hold that weight.',
      },
    ],
    closingTitle:
      'She moved in on April 13, 1955. She never needed to leave.',
    closingParagraphs: [
      'She arrived at a hut with twelve beds. She stayed until it was a world-class institution with over 650. She chose no fanfare, no private practice, no comfort that was not also available to the patients in her care. She ate what she asked others to eat. She stayed when it was hard to stay.',
      'The children who came to India\'s first paediatric oncology department, the rural women whose cervical cancers were caught early because she trained health workers in distant districts, the thousands whose treatment was free because she kept writing letters and knocking on doors until someone listened \u2014 they are her legacy.',
    ],
    closingQuote:
      'She will ever be remembered as the Mother of Oncology in India. And in every patient who walks through these gates without fear, her mantra lives on: Fear not cancer diagnosis, but its delay.',
  },
];

export function getAllFounderSlugs(): string[] {
  return founders.map((f) => f.slug);
}

export function getFounderBySlug(slug: string): Founder | undefined {
  return founders.find((f) => f.slug === slug);
}
