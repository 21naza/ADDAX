/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

 /**
  * Make transaction
  * @param {org.acme.hacknetwork.CoToCoTransaction} CoToCoTransaction
  * @transaction
  */

async function CoToCoTransaction(tx) {

   var company1 = tx.company1;
   var company2 = tx.company2;
   var value = tx.value;

  	if (company1.balance < value) {
      throw new Error('Pas de solde');
    }

    company1.balance -= tx.value;
    company2.balance += tx.value;
    // Get the asset registry for the asset.

    const co1Registry = await getParticipantRegistry('org.acme.hacknetwork.CompanyParticipant')
    // Update the asset in the asset registry.
    await co1Registry.update(company1);

    const co2Registry = await getParticipantRegistry('org.acme.hacknetwork.CompanyParticipant')
    // Update the asset in the asset registry.
    await co1Registry.update(company2);

/*
event CoToBank {
  --> CompanyParticipant company1
  --> BankParticipant bank1
  o Integer value
}*/
    // Emit an event for the modified asset.
    let CoToBank = getFactory().newEvent('org.acme.hacknetwork', 'CoToBank');
    CoToBank.company1 =company1;
    CoToBank.bank1 = company1.bank;
    CoToBank.value = value;
    emit(CoToBank);

    /*
    event BankToBank {
  --> BankParticipant bank1
  --> BankParticipant bank2
  o Integer value
}
    */
    let BankToBank = getFactory().newEvent('org.acme.hacknetwork', 'BankToBank');
    BankToBank.bank1 =company1.bank;
    BankToBank.bank2 = company2.bank;
    BankToBank.value = value;
    emit(BankToBank);

  /*
  event BankToCo {
  --> BankParticipant bank2
  --> BankParticipant company2
  o Integer value
}
  */
    let BankToCo = getFactory().newEvent('org.acme.hacknetwork', 'BankToCo');
    BankToCo.bank2 =company2.bank;
    BankToCo.company2 = company2;
    BankToCo.value = value;
    emit(BankToCo);
}
