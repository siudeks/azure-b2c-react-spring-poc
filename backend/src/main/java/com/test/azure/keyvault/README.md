# Key Vault integration

Architecture Principle defines application secrets location as Azure Key Vault.
To simplify quick tests, there is already created a key vault **spring-secret-conf** with secret named _mySecretKey_

Run application on local machine, open http://localhost:8080/my-secret. Expected output is _my secret value_, what is actual value of _mySecretKey_ stored in key vault
