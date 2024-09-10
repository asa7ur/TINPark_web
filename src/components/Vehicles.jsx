import styled from "styled-components"

const Vehicles = () => {
  return (
    <Wrapper>
        <div className="info">
            <div className="text">
                <h3>Coche 1</h3>
                <h4>1234ABC</h4>
                <p>En Plaza Virgen de Amargura</p>
            </div>
            <div className="icon">

            </div>
        </div>
    </Wrapper>
  )
}
export default Vehicles

const Wrapper = styled.div`
    .info{
        padding: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`