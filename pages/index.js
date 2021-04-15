import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [feeding, setFeeding] = useState(40);
  const [basicServices, setBasicServices] = useState(20);
  const [entertainement, setEntertainement] = useState(10);
  const [dressing, setDressing] = useState(10);
  const [health, setHealth] = useState(5);
  const [education, setEducation] = useState(5);
  const [familyMembers, setFamilyMembers] = useState(1);

  const [salary, setSalary] = useState(400);
  const [business, setBusiness] = useState(0);
  const [others, setOthers] = useState(0);

  const [debt, setDebt] = useState(0);

  console.log(feeding);

  const total =
    salary +
    business +
    others -
    familyMembers *
      (feeding +
        basicServices +
        entertainement +
        dressing +
        health +
        education) -
    debt;
  return (
    <div className={styles.container}>
      <Head>
        <title>Ariana CACPE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form className={styles.form}>
          <div>
            <h4>Ingresos personales</h4>
            <div>
              <label>Sueldo</label>
              <br></br>
              <input
                type="number"
                value={salary}
                onChange={(e) => {
                  setSalary(parseInt(e.target.value));
                }}
              ></input>
            </div>
            <div>
              <label>Negocio</label>
              <br></br>
              <input
                type="number"
                value={business}
                onChange={(e) => {
                  setBusiness(parseInt(e.target.value));
                }}
              ></input>
            </div>
            <div>
              <label>Otros</label>
              <br></br>
              <input
                type="number"
                value={others}
                onChange={(e) => {
                  setOthers(parseInt(e.target.value));
                }}
              ></input>
            </div>
          </div>

          <div>
            <h4>Gastos personales</h4>
            <div>
              <label>Cargas Familiares</label>
              <br></br>
              <input
                type="number"
                value={familyMembers}
                onChange={(e) => {
                  setFamilyMembers(parseInt(e.target.value));
                }}
              ></input>
            </div>
            <div>
              <label>Alimentación</label>
              <br></br>
              <input
                type="number"
                value={feeding}
                onChange={(e) => {
                  setFeeding(parseInt(e.target.value));
                }}
              ></input>
            </div>
            <div>
              <label>Servicios básicos</label>
              <br></br>
              <input
                type="number"
                value={basicServices}
                onChange={(e) => {
                  setBasicServices(parseInt(e.target.value));
                }}
              ></input>
            </div>
            <div>
              <label>Entretenimiento</label>
              <br></br>
              <input
                type="number"
                value={entertainement}
                onChange={(e) => {
                  setEntertainement(parseInt(e.target.value));
                }}
              ></input>
            </div>
            <div>
              <label>Vestimenta</label>
              <br></br>
              <input
                type="number"
                value={dressing}
                onChange={(e) => {
                  setDressing(parseInt(e.target.value));
                }}
              ></input>
            </div>
            <div>
              <label>Salud</label>
              <br></br>
              <input
                type="number"
                value={health}
                onChange={(e) => {
                  setHealth(parseInt(e.target.value));
                }}
              ></input>
            </div>
            <div>
              <label>Educación</label>
              <br></br>
              <input
                type="number"
                value={education}
                onChange={(e) => {
                  setEducation(parseInt(e.target.value));
                }}
              ></input>
            </div>
          </div>

          <div>
            <h4>Deudas</h4>
            <div>
              <label>Instituciones Financieras</label>
              <br></br>
              <input
                type="number"
                value={debt}
                onChange={(e) => {
                  setDebt(parseInt(e.target.value));
                }}
              ></input>
            </div>
          </div>
        </form>
        <div className={styles.resultContainer}>
          <div>Total = {total}</div>
          <div>Total - 50% = {total * 0.5}</div>
        </div>
      </main>
    </div>
  );
}
