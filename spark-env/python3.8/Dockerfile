FROM python:3.8

# Spark dependencies
ENV APACHE_SPARK_VERSION 3.1.1
ENV HADOOP_VERSION 3.2

# Update os and install java
RUN apt-get update && apt-get install -y \
    openssh-server \
    tmux \
    htop \
    git \
    locales \
    apt-transport-https \
    ca-certificates \
    curl \
    vim \
    rsync \
    software-properties-common \
    gpg

# Get jdk8
RUN wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add - && \
    add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb && \
    apt-get update && apt-get install -y adoptopenjdk-8-hotspot

COPY . /docker_setting
WORKDIR /docker_setting

# Install Spark
RUN wget https://downloads.apache.org/spark/spark-${APACHE_SPARK_VERSION}/spark-${APACHE_SPARK_VERSION}-bin-hadoop${HADOOP_VERSION}.tgz && \
    wget https://downloads.apache.org/spark/spark-${APACHE_SPARK_VERSION}/spark-${APACHE_SPARK_VERSION}-bin-hadoop${HADOOP_VERSION}.tgz.asc && \
    wget https://downloads.apache.org/spark/KEYS && \
    gpg --import KEYS && gpg --verify spark-${APACHE_SPARK_VERSION}-bin-hadoop${HADOOP_VERSION}.tgz.asc

RUN mkdir /temp && mv spark-${APACHE_SPARK_VERSION}-bin-hadoop${HADOOP_VERSION}.tgz /temp && cd /temp && \
    tar xzf spark-${APACHE_SPARK_VERSION}-bin-hadoop${HADOOP_VERSION}.tgz -C /usr/local --owner work --group root --no-same-owner && \
    rm spark-${APACHE_SPARK_VERSION}-bin-hadoop${HADOOP_VERSION}.tgz

RUN cd /usr/local && ln -s spark-${APACHE_SPARK_VERSION}-bin-hadoop${HADOOP_VERSION} spark

# Copy jupyter & spark config
RUN cd /docker_setting && cp spark_conf/spark-defaults.conf /usr/local/spark/conf/ && \
    pip install jupyterlab && \
    cp sshd_config /etc/ssh/sshd_config && \
    mkdir -p /home/work/.jupyter/ && \
    mkdir -p /root/.jupyter/ && \
    mkdir -p /spark-temp && \
    cp -r /docker_setting/jupyter/* /home/work/.jupyter/ && \
    cp -r /docker_setting/jupyter/* /root/.jupyter/ && \
    cp .bashrc /home/work/ && \
    cp .bashrc /root/

# Setting spark aws config
RUN wget https://repository.cloudera.com/artifactory/cloudera-repos/org/apache/spark/spark-hadoop-cloud_2.11/2.4.5.7.2.7.1-1/spark-hadoop-cloud_2.11-2.4.5.7.2.7.1-1.jar && \
    cp spark-hadoop-cloud_2.11-2.4.5.7.2.7.1-1.jar /usr/local/spark/jars/

RUN ln -sf /bin/bash /bin/sh
RUN useradd -ms /bin/bash work && usermod -aG sudo work
RUN echo "work:shopback@123" | chpasswd && echo "root:shopback@123" | chpasswd

# Spark config
ENV SPARK_HOME /usr/local/spark
ENV PYTHONPATH $SPARK_HOME/python:$SPARK_HOME/python/lib/py4j-0.10.9-src.zip

COPY . /home/work
WORKDIR /home/work
RUN chown -R work:work /home/work && \
    chown -R work:work /spark-temp

ENTRYPOINT bash
