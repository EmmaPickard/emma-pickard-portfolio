import React from 'react'
import headerStyles from 'styles/Header.module.css'
import Image from 'next/image'
import css from 'public/css.svg';
import express from 'public/express.svg';
import git from 'public/git.svg';
import github from'public/github.svg';
import html from 'public/html.svg';
import javascript from 'public/javascript.svg';
import knex from 'public/knex.svg';
import node from 'public/node.svg';
import postgresql from 'public/postgresql.svg';
import react from 'public/react.svg';
import vscode from 'public/vscode.svg'

const Header = () => {
  return (
    <>
        <div className={headerStyles.title}>
            <h1 className={headerStyles.headerText}> EMMA PICKARD</h1>
            <h3 className={headerStyles.headerSubtext}> Full-Stack Developer</h3>
            
        </div>
        <div className={headerStyles.Row}>

           <div className={headerStyles.Column}>
           <Image 
            src= {git}
            height={50}
            width={50}
            />
           </div>
           <div className={headerStyles.Column}>
           <Image 
            src= {github}
            height={50}
            width={50}
            />

           </div>
           <div className={headerStyles.Column}>
           <Image 
            src= {vscode}
            height={50}
            width={50}
            />

           </div>
           <div className={headerStyles.Column}>
           <Image 
            src= {css}
            height={50}
            width={50}
            />
            </div>
        <div className={headerStyles.Row}>
        
           <div className={headerStyles.Column}>
           <Image 
            src= {html}
            height={50}
            width={50}
            />

           </div>
           <div className={headerStyles.Column}>
           <Image 
            src= {javascript}
            height={50}
            width={50}
            />

           </div>
           <div className={headerStyles.Column}>
           <Image 
            src= {react}
            height={50}
            width={50}
            />

           </div>
           <div className={headerStyles.Column}>
           <Image 
            src= {node}
            height={50}
            width={50}
            />
            </div>
            <div className={headerStyles.Column}>
           <Image 
            src= {express}
            height={50}
            width={50}
            />
           </div>
           <div className={headerStyles.Column}>
           <Image 
            src= {postgresql}
            height={50}
            width={50}
            />
           </div>
           <div className={headerStyles.Column}>
           <Image 
            src= {knex}
            height={50}
            width={50}
            />
           </div>
        </div>
        </div>
    </>
  )
}

export default Header