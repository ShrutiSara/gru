import React from 'react'
import 'antd/dist/antd.css';
import './index.css'

import { Popover, Button } from 'antd';


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
  return (
    <div>
      <div class="new-nav-background">
        <div class="desktop-nav-container">
          <a href="#"><img src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5d992e6ce288d83a93a1a0d8_Guru_AllBlack.svg" class="gru" /></a>
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
        </div>
      </div>
      <div class="subheader">
        <h1>Knowledge that finds you<br/></h1>
        <div class="sub-subheader">
          Gru is a knowledge management solution that ✨<strong>delivers</strong> ✨everything you need.<br/>
          Spend less time searching &amp; more time doing whatever it was you were actually hired to do.
        </div>
        <br/>
        <a href="#" style={{color: 'white'}} class="hvr-wobble-to-bottom-right button hvr-outline-out button-border">Pick a plan</a>
        <div class="tiny-text">Get started for <strong>free</strong>! 🚀</div>
      </div> 
      <div class="main-container">
        <div class="container stack-top">
          <div class="hvr-rotate">
            <img style={{height: 800, width:1000, margin:170}} src="https://assets.website-files.com/5d8d029013ffd80bbb91320d/5db1060df47aa6a6c115bba1_Intercom%402x.png" />
          </div>
        </div>
        <div class="container">
          <div class="wave"></div>
        </div>
      </div>
    </div>
  )
}







