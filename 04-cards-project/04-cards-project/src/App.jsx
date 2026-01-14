

import Card from './components/Card'
const App = () => {

    const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/N7Ye8dm8tdGqFAfQ-32h2_b4WXIuS3-crd5p5doiuX4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9naW5n/ZXJzYXVjZS5jby93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8x/MC9nb29nbGUyMC0x/MDI0eDUxMi5qcGc",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 45, // dollars per hour
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/dx5jbyPuKqTOOVnaZIp0-khcTA5yzC2gAO4mglsom4Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MzU5Mzg4NDMvZmls/ZS9vcmlnaW5hbC1l/M2U5OTM1MjdmYTIw/OTAwODM1OGVlZWFh/NmNiOWVhOC5qcGc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 50,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokBW8NNNPFDXuwJKtJ3TA_N7xlWxvBdygmg&s",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 40,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/BvIZF3cId3uCRdoOTTKZ4yu2rPVWb9UPewy2mIZR6iI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBs/ZS1sb2dvLXdoaXRl/LWNvbG9yLWJyYW5k/LWZyb250LXN0b3Jl/LWxhcy12ZWdhcy0x/MjA0NDYwMzAuanBn",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 65,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/IHWEyt_j3vun7hSCD0HZ5oUVN3clHHj0HTASS1vrKzc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Platform Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 75,
    location: "Remote, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Wt1KYX-K2etAmc3A-5fciIuCjlvQuk_bsS8Blywhivc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NDk2LzYxNy9zbWFs/bC93aW5kb3dzLXN5/bWJvbC1icmFuZC1s/b2dvLWRlc2lnbi1t/aWNyb3NvZnQtc29m/dHdhcmUtaWxsdXN0/cmF0aW9uLWZyZWUt/dmVjdG9yLmpwZw",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 55,
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Wt1KYX-K2etAmc3A-5fciIuCjlvQuk_bsS8Blywhivc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NDk2LzYxNy9zbWFs/bC93aW5kb3dzLXN5/bWJvbC1icmFuZC1s/b2dvLWRlc2lnbi1t/aWNyb3NvZnQtc29m/dHdhcmUtaWxsdXN0/cmF0aW9uLWZyZWUt/dmVjdG9yLmpwZw",
    companyName: "NVIDIA",
    datePosted: "6 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 80,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Q8QAiQ7LMCT9-6m8T3GnXfItKlEedt9Cc3gBi4YM9Vk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC81/NS8wMi90ZXNsYS1i/cmFuZC1sb2dvLWNh/ci1zeW1ib2wtYmxh/Y2stYW5kLXdoaXRl/LWRlc2lnbi12ZWN0/b3ItNDYxNTU1MDIu/anBn",
    companyName: "Tesla",
    datePosted: "2 months ago",
    post: "Software Engineer (Autopilot)",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 70,
    location: "Remote, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/OlORuOT-YFpszTvHIwZE_IbqasVU1ajlByXooHCHRf4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d3NraS5jb20vYmxv/Zy9hZG9iZS1sb2dv/LTIwMTctYmxhY2tf/MTczOTU0Mjc4NTUx/Ny53ZWJw",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UI Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 42,
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/VaKWp6mS--e5ApVejXg6Tbskb16wY8v79DgzJd0WeQc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbHRyZW5k/cy5jb20vdGFjaHlv/bi8yMDE4LzA5L3Vi/ZXItcmVicmFuZC1u/ZXctbG9nby13b2xm/Zi1vbGluc19kZXpl/ZW4uanBnP3Jlc2l6/ZT03MjAsNDA5",
    companyName: "Uber",
    datePosted: "10 weeks ago",
    post: "Mobile App Developer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: 48,
    location: "Mumbai, India"
  }
];


  return (
    <div className='parent'>
          
      {jobOpenings.map(function(elem,idx) {
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} datePosted={elem.datePosted} brandLogo={elem.brandLogo} />
        </div>
      })}
    
      </div>

  )
}

export default App
