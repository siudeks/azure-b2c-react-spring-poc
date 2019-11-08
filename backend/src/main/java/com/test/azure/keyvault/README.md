# Key Vault integration

Architecture Principle defines application secrets location as Azure Key Vault.
To simplify quick tests, there is already created a key vault **spring-secret-conf** with secret named _myKey_
To test reading the secret, you should test 3 scenarios:

1. Run application on local machine, open http://localhost:8080/vault. Expected output is _myValue_, what is actual value of _myKey_ stored in key vault. Reading the secred is possible because jvm runs using your credentials from **az login** command
1. Deploy and run application to Azure containers using Azure Container Instances. Expected output is ???
