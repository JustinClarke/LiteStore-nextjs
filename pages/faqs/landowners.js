import React from 'react'

function landowners() {
        
  return (
    <div>
        <div className="accordion">
            {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
            ))}
        </div>
    </div>
  )
}

export default landowners