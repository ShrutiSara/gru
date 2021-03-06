import React from 'react'
import 'antd/dist/antd.css';
import { Menu, Dropdown, Popover, Button, Carousel, Row, Col } from 'antd';
import { MenuOutlined, CopyrightOutlined, TwitterOutlined, LinkedinFilled, InstagramOutlined, YoutubeFilled } from '@ant-design/icons';

import './index.css'

const { SubMenu } = Menu;

export default function Home() {
  const product = (
    <div>
      <div class="black">
        <a href='#'><p><b>🛠️  Features</b><br/>See how Gru captures, transforms, and delivers knowledge when you need it.</p></a>
        <a href='#'><p><b>🔀  Integrations</b><br/>Gru works where you do. Slack, Chrome, Gmail, and more.</p></a>
        <a href='#'><p><b>🤔  Why Gru?</b><br/>With Gru&#x27;s collaborative knowledge management solution, answers find you.</p></a>
      </div>
      <div class="blue">
        <a href='#'><p>Get the Chrome extension  &gt;</p></a>
        <a href='#'><p>Get the Slack bot  &gt;</p></a>
      </div>
    </div>
  )
  const solutions = (
    <div class="black">
      <a href='#'><p><b>🤝  Support</b><br/>Everything your support team needs to deliver amazing customer experiences.</p></a>
      <a href='#'><p><b>💸  Sales</b><br/>Empower your sales team to drive conversations and close deals.</p></a>
      <a href='#'><p><b>📣  Marketing</b><br/>The content and context to bring your brand&#x27;s story to life.</p></a>
      <a href='#'><p><b>🦄  Company-wide</b><br/>Gru delivers company knowledge, so everyone on your team is an expert.</p></a>
      <a href='#'><p><b>💻  Remote work</b><br/>See how Gru helps teams communicate, collaborate, and connect.</p></a>
    </div>
  )
  const resources = (
    <div class="black">
      <a href='#'><p><b>🙋  Gru Help Center</b><br/>Courses, tips and tricks, and best practices to make Gru work for you.</p></a>
      <a href='#'><p><b>✍️  Blog</b><br/>We&#x27;ve got a heck of a lot to say—and here is where we say it.</p></a>
      <a href='#'><p><b>📖  References</b><br/>Does KM make you say IDK? We explain all the industry terminology here.</p></a>
      <a href='#'><p><b>🎟  Events</b><br/>Webinars, discussions, and more. Find out what&#x27;s happening at Gru.</p></a>
      <a href='#'><p><b>💾  Developers</b><br/>Build powerful, custom knowledge experiences with Gru&#x27;s API.</p></a>
    </div>
  )

const menu = (
  <Menu
    style={{ width: 380}}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
  >
    <SubMenu key="sub1" title="Product">
      <Menu.Item key="1">Features</Menu.Item>
      <Menu.Item key="2">What is Gru</Menu.Item>
      <Menu.Item key="3">Integrations</Menu.Item>
    </SubMenu>
    <Menu.Item key="4">
    Pricing
    </Menu.Item>
    <SubMenu key="sub2" title="Solutions">
      <Menu.Item key="5">Support</Menu.Item>
      <Menu.Item key="6">Sales</Menu.Item>
      <Menu.Item key="7">Marketing</Menu.Item>
      <Menu.Item key="8">Company-Wide</Menu.Item>
      <Menu.Item key="9">Remote Work</Menu.Item>
    </SubMenu>
    <Menu.Item key="10">
    Customers
    </Menu.Item>
    <SubMenu key="sub3" title="Resources">
      <Menu.Item key="11">Gru Help Center</Menu.Item>
      <Menu.Item key="12">Blog</Menu.Item>
      <Menu.Item key="13">References</Menu.Item>
      <Menu.Item key="14">Events</Menu.Item>
      <Menu.Item key="15">Developers</Menu.Item>
    </SubMenu>
    <Menu.Item key="sub16">
      Log in
    </Menu.Item>
    <Menu.Item key="sub17" style={{backgroundColor: "black", color: "white" }}>
      Sign up free
    </Menu.Item>
  </Menu>
)

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
}

  return (
    <div>
      <div class="new-nav-background">
        <div class="desktop-nav-container">
          <a href="#" class="hvr-bounce-in"><img src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5d992e6ce288d83a93a1a0d8_Guru_AllBlack.svg" class="gru" /></a>
          <Popover content={product} title="Product">
            <Button type="link" style={{color: "black"}} ghost>Product</Button>
          </Popover>
          <Button type="link" style={{color: "black"}} ghost>Pricing</Button>
          <Popover content={solutions} title="Solutions">
            <Button type="link" style={{color: "black"}} ghost>Solutions</Button>
          </Popover>
          <Button type="link" style={{color: "black"}} ghost>Customers</Button>
          <Popover content={resources} title="Resources">
            <Button type="link" style={{color: "black"}} ghost>Resources</Button>
          </Popover>
          <div class="right-button1">
            <Button type="link" style={{color: "black"}} ghost>Log in</Button>
          </div>
          <div class="right-button2">
            <a href="#" type="primary" class="button" style={{color: "white", width: 130}} >Sign up free</a>
          </div>
        </div>
        <div class="side-menu">
          <a href="#" class="hvr-bounce-in right-logo"><img src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5d992e6ce288d83a93a1a0d8_Guru_AllBlack.svg" class="gru" /></a>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link hamburger-icon" onClick={e => e.preventDefault()}>
            <MenuOutlined style={{color: "black", fontSize: '25px'}} />
            </a>
          </Dropdown>
        </div>
      </div>
      <div class="subheader">
        <h1>Knowledge that finds you<br/></h1>
        <div class="sub-subheader">
          Gru is a knowledge management solution that ✨<strong>delivers</strong> ✨everything you need.<br/>
          Spend less time searching &amp; more time doing whatever it was you were actually hired to do.
        </div>
        <br/>
        <a href="#" style={{color: 'white'}} class="hvr-wobble-to-bottom-right button hvr-ripple-out button-border">Pick a plan</a>
        <div class="tiny-text">Get started for <strong>free</strong>! 🚀</div>
      </div> 
      <div class="main-container">
        <div class="container stack-top">
          <div class="hvr-rotate">
            <img style={{height: 800, width:1000, margin:170}} src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db1060df47aa6a6c115bba1_Intercom%402x.png" class="big-img" />
            <div class="res">
              <img src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db1060df47aa6a6c115bba1_Intercom%402x-p-500.png" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="wave"></div>
        </div>
      </div>
      <div>
        <div class="customers">
          <p>You’ll be in <em>very</em> good company with Gru&#x27;s other customers</p>
          <div class="logo-container">
            <img class="space-img" style={{height: 100, width: 150}} src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5dc1d8879ecea447cfe3f47f_airtable.svg" />
            <img class="space-img" style={{height: 100, width: 150}} src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0660811163852d810e007_spotify.svg" />
            <img class="space-img" style={{height: 100, width: 150}} src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5dc1d88780d7b32f4e4dd278_chorus.svg"  />
            <img class="space-img" style={{height: 100, width: 150}} src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db06608fcdc19a3e624f3da_shopify.svg" />
            <img class="space-img" style={{height: 100, width: 150}} src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db066081c624d112664fe2a_slack.svg" />
            <img class="space-img" style={{height: 100, width: 150}} src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db06608624900810db85326_glossier.svg" />
            <img class="space-img" style={{height: 40, width: 160}} src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5dc321d578cf5312f97d0ada_square.png"  />
          </div>
        </div>
      </div>
      {/* <img src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5dc06cbc8b310744d59658cd_integrations%403x.jpg" /> */}
      <div class="carousel">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align1" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
              <img class="slide-align2" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
              <img class="slide-align3" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align1" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
              <img class="slide-align2" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
              <img class="slide-align3" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align1" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
              <img class="slide-align2" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
              <img class="slide-align3" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align1" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
              <img class="slide-align2" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
              <img class="slide-align3" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
        </Carousel>
      </div>
      <div class="res-carousel">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img class="slide-align" src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db0a4956f24347935972ca0_quote%20graphic-p-500.png" />
            </h3>
          </div>
        </Carousel>
      </div>
      <div class="ready" style={{textAlign: 'center'}}>
        <strong>Ready to get Gru?</strong>
        <p class="tiny-text" style={{fontSize: '25px'}}>It&#x27;s <strong>FREE</strong> and easy to get started. Just pick the plan that works best for your team, or chat with one of our experts to learn more.</p>
        <span>
          <a href="#" style={{color: 'white'}} class="hvr-wobble-to-bottom-right button hvr-ripple-out button-border">Pick a plan</a>
          &nbsp;
          &nbsp;
          <Button style={{width: 170, height: 60, padding: '15px 0', color: 'black'}} ghost>Request a demo</Button>
        </span>
      </div>
      <footer class="footer">
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            <strong>Product</strong>
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            <strong>By Use Case</strong>
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            <strong>Company</strong>
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            <strong>Support</strong>
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            <strong>Resources</strong>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Features
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Support
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            About Us
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Gru Help Center
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Blog
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Pricing
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Sales
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Customers
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Status
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            References
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Integrations
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Marketing
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Careers
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Security
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Events
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Why Gru?
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Company-wide
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Press kit
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Developers
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Knowledge management software
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Remote work
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Stay in the know
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Gru Academy
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Internal wiki
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Employee onboarding
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
              <strong>More</strong>
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            <strong>Contact Us</strong>
          </Col>
          <Col>
            
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Sales enablement
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            267.469.0264
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Switch to Gru
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            info@getgru.com
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Knowledge management
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            121 S Broad St, Floor 11, Philadelphia, PA
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Knowledge driven culture
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Slack
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Terms of service
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Dev agreement
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Privacy
          </Col>
          <Col xs={{ span: 7, offset: 2 }} lg={{ span: 2, offset: 2 }}>
            Beta agreement
          </Col>
        </Row>
        <p style={{paddingLeft: '112px'}}><CopyrightOutlined />2020 Gru Technologies, Inc</p>
        <div class="icon">
          <TwitterOutlined style={{fontSize: '30px'}} /> <LinkedinFilled style={{fontSize: '30px'}} /> <InstagramOutlined style={{fontSize: '30px'}} /> <YoutubeFilled style={{fontSize: '30px'}} />
        </div>
      </footer>
    </div>
  )
}