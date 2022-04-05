import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container  blogs mb-5 '>
            <h1 className='mt-5 p-3 '>Question & Answer</h1>
            <div className='row mt-5'>
               <div className='col-md-12 col-lg-12 blogs mb-5'>
               <Accordion>
                   <Accordion.Item eventKey="0">
                    <Accordion.Header>Q. What is context api?</Accordion.Header>
                    <Accordion.Body>
                    The Context API can be used to share data with multiple components, create global variables,alternative to passing props manually in a component tree,  without having to pass data through props manually.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Q. What is semantic tags?</Accordion.Header>
                    <Accordion.Body>
                   HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it .HTML5 semantic elements also help search engines to read the page and find the required information faster . Exam: header ,div,main,article,footer etc.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Q. Difference between inline and block elements?</Accordion.Header>
                    <Accordion.Body>
                    Inline elements don’t start from a new line and don’t have top and bottom margins as block elements have. 
                    Examples of Inline elements: img, a, input, label etc
                    Block Element:Block Element always start in a new line and have top and bottom margins. It does not contain any other elements next to it.
                    Examples of Block elements: div, h1-h6, p, ul, li etc
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
         </div>
        </div>
    );
};

export default Blogs;