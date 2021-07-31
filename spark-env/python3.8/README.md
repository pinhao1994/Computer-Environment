# Quick Start
Under director `spark-env/python3.8/`
- build images

  `docker build -t [image_name]:[image_tag] .`
- run images

  `docker run -d -it -p [jupyter_lab_port]:8888 --name [container_name] [image_name]:[image_tag]`
- access into container

  `docker exec -it [container_name] bash`

- start a jupyter lab server

  `jupyter lab --allow-root`

  You can also run jupyter server in tmux.
- connect to jupyter lab with browser.

  In browser, open url: `https://[ip_or_dns_to_machine]:[jupyter_lab_port]`

  The password for jupyter lab is `shopback8888`
- There is a spark demo for aws s3 read and write in `spark-env/python3.8/spark_demo.ipynb`. You can upload to jupyter server and try it.
