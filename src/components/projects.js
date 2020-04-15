import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import DeepLearning from './deeplearning';

class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects">
                    <Grid>
                        <Cell col={6} tablet={12}>
                            {/* Project 1 */}
                            <Card shadow={5} style={{minWidth: '450', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: '2em'}}>
                                <CardTitle style={{color: '#fff', height: '200px', background: 'url(portfolio.png) center / cover'}}></CardTitle>
                                <CardText style={{fontFamily: 'Noto Sans JP'}}>
                                    ポートフォリオサイトの開発 <br />
                                    Reactを使用 <br /><br />
                                </CardText>
                                <CardActions border>
                                    <a href="http://google.com" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                            </Card>
                            <br />

                            {/* Project 2 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: 'black', height: '200px', background: 'url(aws-uploader.png) center / cover'}}></CardTitle>
                                <CardText style={{fontFamily: 'Noto Sans JP'}}>
                                    AWSを使用したアップローダアプリの開発 <br />
                                    Python(Flask)を使用 <br />
                                    boto3よりAWS各種サービスを操作
                                </CardText>
                                <CardActions border>
                                    <a href="https://www.slideshare.net/HarukiTsuchiya1/ss-207995181" target="_blank">
                                        <Button colored>Detail</Button>
                                    </a>
                                </CardActions>
                            </Card>
                            <br /><br />
                        </Cell>

                        <Cell col={6} tablet={12}>
                            {/* Project 3 */}
                            <Card shadow={5} style={{minWidth: '450', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: '2em'}}>
                                <CardTitle style={{color: 'black', height: '200px', background: 'url(hackfuture.png) center / cover'}}></CardTitle>
                                <CardText style={{fontFamily: 'Noto Sans JP'}}>
                                SNSのツイートを解析した口コミアプリの開発 <br />
                                PHP(Laravel)を使用 <br />
                                TwitterAPI, Kintone, YahooAPIを使用
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/tsuchiya-github/labbase-hackathon" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                    <a href="https://note.com/1ha1ru0ki1/n/n444a6a7f7b90" target="_blank">
                                        <Button colored>Detail</Button>
                                    </a>
                                </CardActions>
                            </Card>
                            <br />
                            
                            {/* Project 4 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: 'black', height: '200px', background: 'url(questionnaire.png) center / cover'}}></CardTitle>
                                <CardText style={{fontFamily: 'Noto Sans JP'}}>
                                深層学習用メタデータ収集ツールの開発 <br />
                                PHP(Laravel)を使用 <br />
                                Ajaxによる矩形座標の取得
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/tsuchiya-github/Annotation-Tool-for-Satreps" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div>
                    <DeepLearning
                        Color="grey"
                        Lab="Computer Vision Lab."
                        Left="lab.png"
                        Right1="弊研究室ではコンピュータビジョン関連の研究をしており，2020年度はM2:9人，M1:8人，B4:8人に加え，研究留学生:5人の計30人のメンバーが在籍している．"
                        Right2="研究のテーマとしては「ポリープやSEM画像の3次元形状復元・鏡面反射除去」，「CT画像におけるリンパ節や光学顕微鏡画像における細胞，毛穴画像の検出・識別・セグメンテーション」，「姿勢推定」，「Webからの自動データセット構築」，「プロジェクションマッピング」，「中部大学駐車場IT化実現にむけた取り組み」などがある．他大学や企業との共同研究だけでなく，研究における国際交流にも非常に積極的な研究室である(写真はインド工科大学の学生の歓迎会の様子)．"
                        Right3="私は主に一般物体認識関係の研究に励んでいる(下記)．"
                        buttonName="研究室HP"
                        buttonURL="http://www.cvl.cs.chubu.ac.jp/index-j.html"
                    />
                    <DeepLearning
                        Color="#DDDDDD"
                        Title="Realized A Human Hearing Robot"
                        Left="hearing-robot.png"
                        Right1="聴導犬は，生活に必要な音を検知し難聴者に情報を伝達する役割を持つ．聴導犬による難聴者の支援は非常に有用であるが，実働頭数は非常に少ない．そのため，聴導犬の代替をする聴導犬ロボットの実現が望まれている．本研究では，聴導犬ロボットを実現するための高精度な人物の検出・追跡手法を提案した．"
                        Right2="人物検出のタスクについてはロボットに搭載されたKinectを用いてロボットの走行中に高精度・高速に人物を発見することを目的とする．本研究ではリアルタイム処理が可能な高速性と他手法に劣らない精度を持つ，検出対象のスケール変化に頑健なSingleShotベースの手法であるYOLOv3をベースに人物検出手法を提案した．検出クラス数を聴導犬ロボットのタスクに合わせて削減し，またPascalVOCに聴導犬特有の視点からのデータを加え，更にアンカーボックスの調整を行うことでYOLOv3を聴導犬ロボット向けの物体検出ネットワークに改良した．"
                        Right3="人物追跡のタスクではROSで提供されるTurtlebot用のSLAMナビゲーションプログラムをベースに行っている．Turtlebot2はROSの標準プラットフォームとしてサポートされており本研究ではプロセス間の通信にROSを用いている．SLAMナビゲーションプログラムをベースにロボットを制御するには，あらかじめ作製した実験環境の2次元SLAMマップと，その空間上でのロボットの移動目標座標を与える必要がある．"
                    />
                    <DeepLearning
                        Color="pink"
                        Title="Classifying Road Damage Considering Influence on Classification Accuracy"
                        Left="roaddamage.png"
                        Right1="本研究はバンコクにおける道路の路面状況に着目したものである．タイの道路には多くの道路損傷が点在しており，道路損傷によってハンドルを取られたり，タイヤがパンクしてしまう可能性がある．また，実際にタイでは二輪車による自損事故が交通事故全体の48%を占めており，交通渋滞を招く原因となっているため，早急な路面状況の改善が必要とされている．"
                        Right2="これまで画像処理技術を用いた道路損傷に関する研究として，道路損傷の有無の検出や，区画線のかすれのレベル分けなどが行われてきた．しかし，道路の修繕の実務においては損傷の種類によって修繕の対応が変わるため，損傷の有無の検出や特定の道路損傷のレベル分けだけでなく，損傷の種類の識別が求められている．そこで本稿では，物体検出手法の1つであるYOLOv3を用いて道路損傷を検出するだけでなく，損傷の種類も識別することにより，道路の修繕の実務の支援を行うための学習モデルを構築した．また，Data Augmentationによる道路損傷の検出 · 識別精度の比較を行い，汎化性能の高い学習モデルを構築した．"
                        buttonName="論文"
                        buttonURL="https://www.sciencedirect.com/science/article/pii/S1877050919315157?via%3Dihub"
                    />
                    <DeepLearning
                        Color="yellow"
                        Title="Estimate &quot; Quality of Life&quot; from Images"
                        Left="bangkok.jpg"
                        Right1="SATREPSと呼ばれる地球規模課題の解決を目指した研究プロジェクトのメンバーとして活動をしており，バンコクの交通渋滞を解消するために，交通渋滞による不快な移動をいかに快適なものにするかという視点でQoLを評価する方法について研究を行っている．"
                        Right2="日本ではQoLというと医療や福祉の場で使われることが多いが，本研究では老若男女，所得などの属性の異なる個々人の移動にともなう幸福感や充実感，快適さなどをAIによる画像処理技術を駆使して定量化しようと試みている．
                        しかし快適さの基準は人それぞれ異なる．例えば時間がかからないこと，お金がかからないこと，景観が美しいこと，安全性が高いこと，乗り物を降りてからあるく距離，空調が快適であること，移動中の揺れが少ないことなどが挙げられる．本研究の難しいところは「快適さ，QoLという人によって異なる感覚をどのように測るか」ということで，試行錯誤中しながらQoL評価システムの実適用に向けて取り組んでいる．"
                        buttonName="プロジェクトページ"
                        buttonURL="https://www.jst.go.jp/global/kadai/h2904_thailand.html"
                    />
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Web Develop</Tab>
                    <Tab>Laboratory</Tab>
                </Tabs>

                <div className="projects-grid" style={{backgroundColor: '#ffeeff'}}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                </div>
            </div>
        )
    }
}

export default Projects;