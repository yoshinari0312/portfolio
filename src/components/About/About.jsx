import { Timeline, timelineItemClasses } from '@mui/lab';
import "./About.css"
import { Avatar } from '@mui/material';
import { TitleHeader } from '../common/TitleHeader';
import { Link } from '../common/Link';
import { AboutSchool } from './AboutSchool';
import { AboutSchoolDetail } from './AboutSchoolDetail';
import { AboutOutline } from './AboutOutline';
import { AboutTimelineItem } from './AboutTimelineItem';
import { Layout } from '../common/Layout';

export const About = () => {
  return (
    <Layout id="about">
      <TitleHeader>About</TitleHeader>
      <div className='aboutTimeline'>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
              ml: 10
            },
          }}
        >
          <AboutTimelineItem
            color="warning"
            school={<AboutSchool color="orange">〜2017 中学</AboutSchool>}
            schoolDetail={<AboutSchoolDetail>足利市立第一中学校（卒業）</AboutSchoolDetail>}
            outline={<AboutOutline>{["#柔道部に所属", "#県大会優勝 #全国大会出場"]}</AboutOutline>}
          />
          <AboutTimelineItem
            color='primary'
            school={<AboutSchool color="blue">2017〜2020 高校</AboutSchool>}
            schoolDetail={<AboutSchoolDetail>佐野日本大学高等学校 特進αコース（卒業）</AboutSchoolDetail>}
            outline={<AboutOutline>{["#卒業式で成績優秀者として表彰"]}</AboutOutline>}
          />
          <AboutTimelineItem
            color='secondary'
            school={<AboutSchool color="purple">2020〜2024 大学</AboutSchool>}
            schoolDetail={<AboutSchoolDetail>慶應義塾大学 理工学部情報工学科（卒業）</AboutSchoolDetail>}
            outline={<AboutOutline>{[<>#<Link url='https://www.ailab.ics.keio.ac.jp/'>今井倫太研究室</Link>に所属し、AIロボティクスについて研究</>, <>#卒業式で首席として<Link url='http://www.keiokougakukai.org/sub-text/20230323kougakukaisyou.html'>慶應工学会賞</Link>を受賞</>]}</AboutOutline>}
          />
          <AboutTimelineItem
            color='success'
            school={<AboutSchool color="green">2024〜 大学院</AboutSchool>}
            schoolDetail={<AboutSchoolDetail>慶應義塾大学大学院 理工学研究科開放環境科学専攻（卒業見込）</AboutSchoolDetail>}
            outline={<AboutOutline>{["#修士1年生", "#心理学部の教授とAIロボティクスに関する共同研究"]}</AboutOutline>}
          />
        </Timeline>
        <div className='aboutPicture'>
          <Avatar alt="顔写真" src={`${process.env.PUBLIC_URL}/img/face2.jpg`} sx={{ width: 250, height: 250}} />
          <p>小野寺佳成</p>
        </div>
      </div>
    </Layout>
  )
}
