import React from 'react'

export default function Accordion (props) {
  const { title, children } = props

  return (
    <details class="accordion">
      <summary class="accordion-header">
        <i class="icon icon-arrow-right mr-2"/>
        <span class="c-hand">{title}</span>
      </summary>
      <div class="accordion-body">
        {children}
      </div>
    </details>
  )
}
