"use strict";

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// const Filter = (props) => {
//   const Section = styled.section`
//    margin-left:2rem;
//     width: 100%;
//   `;
//   const CenterBox = styled.div``;
//   const Title = styled.h4`
//     font-family: "Arial, Helvetica, sans-serif";
//     font-size: 1.2rem;
//   `;
//   const Select = styled.select`
//     width: 120px;
//     height: 25px;
//   `;
//   const Option = styled.option`
//     font-size: 15px;
//   `;
//   const Container = styled.div`
//     margin-bottom: 0.5rem;
//   `;
//   const SpaceContainer = styled.div`
//     margin: 2rem 0;
//   `;
//   const Span = styled.span`
//     display: block;
//     margin-bottom: 0.5rem;
//     color: black;
//     font-size: 1.1rem;
//   `;
//   const InputRight = styled.input`
//     width: 45px;
//     border-radius: 4px;
//     outline: none;
//   `;
//   const InputLeft = styled.input`
//     width: 45px;
//     margin-left: 10px;
//     border-radius: 4px;
//     outline: none;
//   `;
//   const Label = styled.label`
//     display: block;
//   `;
//   const LabelText = styled.span`
//     display: inline-block;
//     width: 100px;
//   `;
//   const Checkout = styled.input`
//     width: 13px;
//     height: 13px;
//   `;
//   return (
//     <Section>
//       <CenterBox>
//         <Title>Filter</Title>
//         <Container>
//           <Select name="neighbourhood" onChange={props.change}>
//             <Option value="fairfax">fairfax</Option>
//             <Option value="Manassas">Manassas</Option>
//             <Option value="Miami">Miami</Option>
//           </Select>
//         </Container>
//         <Container>
//           <Select name="housetype" onChange={props.change}>
//             <Option value="Ranch"> Ranch</Option>
//             <Option value="Studio"> Apartment</Option>
//             <Option value="Studio"> Studio</Option>
//             <Option value="Room"> Room</Option>
//           </Select>
//         </Container>
//         <Container>
//           <Select
//             name="bedrooms"
//             className=" filters bedrooms"
//             onChange={props.change}
//           >
//             <Option value="2"> 2 BR</Option>
//             <Option value="3"> 2 BR</Option>
//             <Option value="4"> 4 BR</Option>
//           </Select>
//         </Container>
//         <SpaceContainer>
//           <Container >
//             <Span>Price</Span>
//             <InputRight
//               type="text"
//               name="min_price"
//               value={props.globalState.min_price}
//               onChange={props.change}
//             />
//             <InputLeft
//               type="text"
//               name="max_price"
//               value={props.globalState.max_price}
//               onChange={props.change}
//             />
//           </Container>
//           <Container >
//             <Span >Floor space</Span>
//             <InputRight
//               type="text"
//               name="min_floor_space"
//               value={props.globalState.min_floor_space}
//               onChange={props.change}
//             />
//             <InputLeft
//               type="text"
//               name="max_floor_space"
//               value={props.globalState.max_floor_space}
//               className="max_floor_space"
//               onChange={props.change}
//             />
//           </Container>
//         </SpaceContainer>
//         <SpaceContainer className="filters extras">
//           <h4>extras</h4>
//           <Label htmlFor="extras">
//             <LabelText>Elevator</LabelText>
//             <Checkout name="elevator" value="elevator" type="checkbox" />
//           </Label>
//           <Label htmlFor="extras">
//             <LabelText>Swimming Pool</LabelText>
//             <Checkout
//               name="swimming_pool"
//               value="swimming_pool"
//               type="checkbox"
//               onChange={props.change}
//             />
//           </Label>
//           <Label htmlFor="extras">
//             <LabelText>finished Basement</LabelText>
//             <Checkout
//               name="finished_basement"
//               value="finished_basement"
//               type="checkbox"
//               onChange={props.change}
//             />
//           </Label>
//           <Label htmlFor="extras">
//             <LabelText>gyms</LabelText>
//             <Checkout
//               name="gyms"
//               value="gyms"
//               type="checkbox"
//               onChange={props.change}
//             />
//           </Label>
//         </SpaceContainer>
//       </CenterBox>
//     </Section>
//   );
// };
// export default Filter;
var Filter =
/*#__PURE__*/
function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Filter).call(this));
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {}
  }]);

  return Filter;
}(Component);