import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Conference from './conference';
import desk from './../images/desk.jpg';

class Resume extends Component {
    render() {
        return(
            <div className="resume">
                <Grid>
                    <Cell col={4} tablet={8}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={desk}
                                alt="avatar"
                                style={{height: '400px'}}
                            />
                        </div>

                        <h2 style={{color: 'white', paddingTop: '2em', fontFamily: 'Noto Sans JP'}}>土屋 陽輝</h2>
                        <h4 style={{color: 'white', fontFamily: 'Noto Sans JP'}}>中部大学大学院 工学研究科 情報工学専攻</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '70%'}}/>
                        <h5 style={{color: 'white'}}>Address</h5>
                        <p style={{color: 'white', fontFamily: 'Noto Sans JP'}}>Aichi, Japan</p>
                        <h5 style={{color: 'white'}}>LINE ID</h5>
                        <p style={{color: 'white', fontFamily: 'Noto Sans JP'}}>1ha1ru0ki1</p>
                        <h5 style={{color: 'white'}}>Email</h5>
                        <p style={{color: 'white', fontFamily: 'Noto Sans JP'}}>tp19014-0984@sti.chubu.ac.jp</p>
                        <p style={{color: 'white', fontFamily: 'Noto Sans JP'}}>haruki1101007@gmail.com</p>
                        <hr style={{color: 'white', borderTop: '3px solid #833fb2', width: '70%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2012}
                            endYear={2015}
                            schoolName="愛知県立大府東高等学校"
                            schoolDescription="友達に流され理系に進学．なんとなくデスクワークがしたいという気持ちがあった中でIT技術に興味が湧き，情報工学の道に進むことを決意した．"
                        />
                        <Education 
                            startYear={2015}
                            endYear={2019}
                            schoolName="中部大学工学部情報工学科"
                            schoolDescription="基本的なコンピュータサイエンス・言語に関する勉強をした．ソフトウェア系の講義ばかり履修していた．自動運転や顔認識等の画像処理技術に興味を持ちCV系の研究室へ．"
                        />
                        <Education 
                            startYear={2019}
                            endYear={2021}
                            schoolName="中部大学大学院工学研究科情報工学専攻"
                            schoolDescription="現在M2．修士論文辛いけど学位欲しいから頑張ります．"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience
                            startYear="2019/2/24"
                            endYear="2019/3/17"
                            jobName="CPILS - Study Abroad"
                            jobDescription="フィリピンはセブにて3週間の語学留学に挑戦．初海外+英語漬けの生活に最初は苦労したけどあっという間の3週間だった．また行きたい．"
                        />
                        <Experience
                            startYear="2019/8/5"
                            endYear="2019/8/9"
                            jobName="Amazon Web Service Japan - Internship"
                            jobDescription="AWSジャパンにて就業体験をした．意図的に障害を発生させたAWS上の環境へのトラブルシューティングをしたり，AWSサービスを使ったハッカソン的なことをした．どの学生もレベルが高くて刺激的な1週間だった．"
                        />
                        <Experience
                            startYear="2019/8/14"
                            endYear="2019/9/20"
                            jobName="Chulalongkorn University - Research Internship"
                            jobDescription="タイはバンコクに位置するチュラロンコン大学にて海外研究留学をした．現地ではモデルの構築と学習を行いながら，隙間時間でメタデータの収集に尽力した．"
                        />
                        <Experience
                            startYear="2019/12/14"
                            endYear="2019/12/15"
                            jobName="Labbase「Hack Future」 - Hackathon Event"
                            jobDescription="日本初の理系大学生対抗ハッカソンに参加．ツイートを形態素解析によりネガポジ判定してリアルな口コミが見れるアプリを開発した．作業時間が少ない中でのスピード感のある開発を初めて経験できて楽しかった．"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Python"
                            progress={90}
                        />
                        <Skills
                            skill="Linux"
                            progress={90}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={75}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={75}
                        />
                        <Skills
                            skill="PHP"
                            progress={70}
                        />
                        <Skills
                            skill="C/C++"
                            progress={65}
                        />
                        <Skills
                            skill="Java"
                            progress={65}
                        />

                        <Skills
                            skill="MySQL"
                            progress={65}
                        />
                        <Skills
                            skill="Git"
                            progress={60}
                        />
                        <Skills
                            skill="Docker"
                            progress={60}
                        />
                        <Skills
                            skill="AWS"
                            progress={50}
                        />
                        <Skills
                            skill="R"
                            progress={40}
                        />
                        <Skills
                            skill="Ruby"
                            progress={30}
                        />
                        <Skills
                            skill="Swift"
                            progress={25}
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Conference Papers</h2>
                        <Conference
                            Date="2019/9"
                            conferenceName="23rd International Conference on Knowledge Based and Intelligent information and Engineering Systems"
                            conferenceDescription="Haruki Tsuchiya, Shinji Fukui, Yuji Iwahori, Yoshitsugu Hayashi, Witsarut Achariyaviriya, and Boonserm Kijsirikul. A Method of Data Augmentation for Classifying Road Damage Considering Inﬂuence on Classiﬁcation Accuracy. Procedia Computer Science, Vol. 159, p. 1449-1458, 2019. Knowledge Based and Intelligent Information & Engineering Systems: Proceedings of the 23rd International Conference KES2019."
                        />
                        <Conference
                            Date="2019/7"
                            conferenceName="第22回 画像の認識・理解シンポジウム"
                            conferenceDescription="土屋陽輝, 福井真二, 岩堀祐之, 林良嗣, Witsarut Achariyaviriya, Boonserm Kijsirikul, &quot;道路損傷の検出・識別精度への影響を考慮したデータセットの生成方法&quot;, P2-4, 第22回 画像の認識・理解シンポジウム(MIRU2019), 2019."
                        />
                        <Conference
                            Date="2018/11"
                            conferenceName="第16回情報学ワークショップ"
                            conferenceDescription="土屋陽輝(中部大学), 福井真二(愛知教育大学), 岩堀祐之(中部大学), 中村剛士(名古屋工業大学)，&quot;聴導犬ロボットの実現のための人物の検出・追跡&quot;, P113, 知的画像処理, 第16回情報学ワークショップ(WiNF 2018), 2018."
                        />
                        <Conference
                            Date="2018/9"
                            conferenceName="平成30年度電気・電子・情報関係学会東海支部連合大会"
                            conferenceDescription="土屋陽輝, 大岩大夢, 岩堀祐之, 福井真二, 中村剛士，&quot;聴導犬ロボットのための人物の検出と追跡&quot;, I2-6, コンピュータビジョン, 平成30年度電気・電子・情報関係学会東海支部連合大会, 2018."
                        />
                    </Cell>
                </Grid>
                <Grid>
                </Grid>
            </div>
        )
    }
}

export default Resume;