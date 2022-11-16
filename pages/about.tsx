import styled from '@emotion/styled'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import profileImg from '../static/images/profile-img.jpeg'

const AboutContaier = styled.div`
  display: flex;
  padding: 5rem 10rem;
  color: rgb(55 65 81);

  .badge-container {
    > img {
      margin: 0.3rem;
    }
  }

  .icon-container {
    > img {
      margin-right: 2rem;
      :hover {
        cursor: pointer;
      }
    }
  }

  .content-box {
    margin: 3rem 0;
  }
`
const About = ({ Component, pageProps }: AppProps) => {
  const getBadge = (name: string, color: string) =>
    `https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${name}&logoColor=white`

  const openPage = (type: 'git' | 'notion' | 'velog') => {
    if (type === 'git') {
      window.open('https://github.com/JeongGoEun')
    } else if (type === 'notion') {
      window.open(
        'https://goeunwiki.notion.site/66e7c8f9cbea4a5d8a9674866f956f5a'
      )
    } else {
      window.open('https://velog.io/@wjdrhdms002')
    }
  }

  return (
    <AboutContaier>
      <div className="mt-8 min-w-[280px]">
        <Image
          className="border-4 rounded-full border-[#415f9d]"
          src={profileImg}
          alt="profile-image"
          width={300}
          height={300}
        />
      </div>

      <div className="ml-20">
        <div className="content-box">
          <div className="text-2xl font-bold">Introduce</div>
          <div className="text-lg">프론트엔드 개발자 💻</div>
          <div className="text-lg">~ Nextjs 공부중 ✍️</div>
        </div>

        <div className="content-box">
          <div className="text-2xl font-bold">Skill Set</div>
          <div className="flex flex-wrap badge-container">
            <img src={getBadge('JavaScript', 'F7DF1E')} alt="badge-logo" />
            <img src={getBadge('TypeScript', '3178C6')} alt="badge-logo" />
            <img src={getBadge('React', '61DAFB')} alt="badge-logo" />
            <img src={getBadge('Vue.js', '4FC08D')} alt="badge-logo" />
            <img src={getBadge('Node.js', '339933')} alt="badge-logo" />
            <img src={getBadge('Next.js', '000000')} alt="badge-logo" />
            <img src={getBadge('HTML5', 'E34F26')} alt="badge-logo" />
            <img src={getBadge('CSS3', '1572B6')} alt="badge-logo" />
            <img src={getBadge('Sass', 'CC6699')} alt="badge-logo" />
          </div>
        </div>

        <div className="content-box">
          <div className="text-2xl font-bold">Tools</div>
          <div className="flex flex-wrap badge-container">
            <img src={getBadge('Git', 'F05032')} alt="badge-logo" />
            <img src={getBadge('GitHub', '181717')} alt="badge-logo" />
            <img src={getBadge('Sourcetree', '0052CC')} alt="badge-logo" />
            <img
              src={getBadge('Visual Studio Code', '007ACC')}
              alt="badge-logo"
            />
            <img src={getBadge('Jira', '0052CC')} alt="badge-logo" />
            <img src={getBadge('Confluence', '172B4D')} alt="badge-logo" />
            <img src={getBadge('Notion', '000000')} alt="badge-logo" />
            <img src={getBadge('Figma', 'F24E1E')} alt="badge-logo" />
          </div>
        </div>
        <div className="flex content-box icon-container mt-7">
          <img
            src="../static/icons/github-icon.svg"
            alt="badge-logo"
            width={40}
            onClick={() => openPage('git')}
          />
          <img
            src="../static/icons/notion-icon.svg"
            alt="badge-logo"
            width={40}
            onClick={() => openPage('notion')}
          />
          <img
            src="../static/icons/velog-icon.svg"
            alt="badge-logo"
            width={40}
            onClick={() => openPage('velog')}
          />
        </div>
      </div>
    </AboutContaier>
  )
}

export default About
